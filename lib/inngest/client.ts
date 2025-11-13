import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "signalist",
  ai: { openai: { apiKey: process.env.OPENAI_API_KEY! } },
});
