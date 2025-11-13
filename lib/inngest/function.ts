import { sendWelcomeEmail } from "../nodemailer";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    const userProfile = `
            - Country: ${event.data.country}
            - Investment goals: ${event.data.investmentGoals},
            - Risk tolerance: ${event.data.riskTolerance},
            - Preferred industry: ${event.data.preferredIndustry}
        `;

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{ userProfile }}",
      userProfile
    );
    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.openai({ model: "gpt-4o-mini" }),
      body: {
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
    });

    // Извлекаем content сразу после получения ответа
    // Старый код для Gemini (закомментирован)
    // const part = response.candidates?.[0]?.content?.parts?.[0];
    // const introText =
    //   (part && "text" in part ? part.text : null) ||
    //   "Thanks for joining Signalist. You now have the tools to track markets and make smarter move.";
    
    // Старый код для OpenAI (неправильный - content может быть null)
    // const introText =
    //   response.choices?.[0]?.message?.content ||
    //   "Thanks for joining Signalist. You now have the tools to track markets and make smarter move.";

    // Правильная обработка ответа от OpenAI через Inngest
    // Извлекаем content сразу, чтобы не потерять его в step.run
    const content = response.choices?.[0]?.message?.content;
    const introText =
      (content && typeof content === 'string' ? content : null) ||
      "Thanks for joining Signalist. You now have the tools to track markets and make smarter move.";

    // Логируем для отладки
    console.log("=== DEBUG: OpenAI Response ===");
    console.log("Content:", content);
    console.log("Content type:", typeof content);
    console.log("IntroText:", introText);
    console.log("IntroText length:", introText?.length);
    if (!content) {
      console.log("OpenAI response (content is null):", JSON.stringify(response, null, 2));
    }

    await step.run("send-welcome-email", async () => {
      const {
        data: { email, name },
      } = event;
      
      console.log("=== DEBUG: Sending Email ===");
      console.log("Email:", email);
      console.log("Name:", name);
      console.log("Intro:", introText);
      
      return await sendWelcomeEmail({
        email,
        name,
        intro: introText,
      });
    });
    return {
      success: true,
      message: "Welcome email sent successfully",
    };
  }
);
