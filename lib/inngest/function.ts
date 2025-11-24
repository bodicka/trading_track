import { sendWelcomeEmail } from "../nodemailer";
import { getYandexGPTConfig, YANDEX_GPT_API_URL } from "../yandex-gpt/client";
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
    const introText = await step.run("generate-welcome-intro", async () => {
      const { apiKey, folderId } = getYandexGPTConfig();

      try {
        const response = await fetch(YANDEX_GPT_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Api-Key ${apiKey}`,
            "x-folder-id": folderId,
          },
          body: JSON.stringify({
            modelUri: `gpt://${folderId}/yandexgpt/latest`,
            completionOptions: {
              stream: false,
              temperature: 0.6,
              maxTokens: "2000",
            },
            messages: [
              {
                role: "user",
                text: prompt,
              },
            ],
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.log("Yandex GPT API error:", errorText);
          throw new Error(
            `Yandex GPT API error: ${response.status} ${errorText}`
          );
        }

        const data = await response.json();

        const text =
          data.result?.alternatives?.[0]?.message?.text ||
          "Thanks for joining Signalist. You now have the tools to track markets and make smarter move.";
        console.log("=== DEBUG: Yandex GPT Response ===");
        console.log("IntroText:", text);
        console.log("IntroText length:", text?.length);

        return text;
      } catch (error) {
        console.log("Error generating welcome intro with Yandex GPT:", error);
        return "Thanks for joining Signalist. You now have the tools to track markets and make smarter move.";
      }
    });

    await step.run("send-welcome-email", async () => {
      const {
        data: { email, name },
      } = event;

      console.log("=== DEBUG: Sending Email ===");
      console.log("Email:", email);
      console.log("Name", name);
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
