import TelegramBot from "node-telegram-bot-api";
import { log } from "./../utils/log";

export const sendVideo = (videoUrl: string, config: Config) => {
  const bot = new TelegramBot(config.apiKey, { polling: false });

  if (!config.chatIds) {
    throw new Error("No chat IDs set");
  }

  log("Sending video to", config.chatIds.join(", "));

  config.chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, videoUrl).catch((reason) => {
      log("Failed to send video to", chatId, reason);
    });
  });
};
