import TelegramBot from "node-telegram-bot-api";
import { log } from "./../utils/log";

const isLate = (): boolean => {
  const currentHour = new Date().getHours();
  return currentHour >= 0 && currentHour < 6;
};

export const goToBed = (bot: TelegramBot, config: Config) => {
  bot.onText(/.*/, (msg) => {
    const chatId = msg.chat.id;

    if (config.chatIds && !config.chatIds.includes(String(chatId))) {
      return;
    }

    if (isLate()) {
      log("Telling user to go to bed");
      bot.sendMessage(msg.chat.id, "Go to bed");
    }
  });
};
