import { config } from "dotenv";

const parseEnv = (): Config => {
  config();

  const initialConfig: Config = {
    apiKey: "",
  };

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Missing API_KEY");
  } else {
    initialConfig.apiKey = apiKey;
  }

  const chatIds = process.env.CHAT_IDS;
  if (chatIds) {
    try {
      const parsedIds = JSON.parse(chatIds);
      if (Array.isArray(parsedIds)) {
        initialConfig.chatIds = parsedIds;
      } else {
        throw new Error("Invalid schema for CHAT_IDS");
      }
    } catch (e) {
      // do nothing
    }
  }

  return initialConfig;
};

export const env = parseEnv();
