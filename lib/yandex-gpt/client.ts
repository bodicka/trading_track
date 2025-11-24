export const YANDEX_GPT_API_URL =
  "https://llm.api.cloud.yandex.net/foundationModels/v1/completion";

export interface YandexGPTConfig {
  apiKey: string;
  folderId: string;
}

export const getYandexGPTConfig = (): YandexGPTConfig => {
  const apiKey = process.env.YANDEX_GPT_API_KEY;
  const folderId = process.env.YANDEX_FOLDER_ID;

  if (!apiKey) {
    throw new Error("YANDEX_GPT_API_KEY is not set in environment variables");
  }

  if (!folderId) {
    throw new Error("YANDEX_FOLDER_ID is not set in environment variables");
  }

  return { apiKey, folderId };
};
