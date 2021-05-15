import TelegramBot from "node-telegram-bot-api";
import { log } from "./../utils/log";

export const reee = (bot: TelegramBot, config: Config) => {
  bot.onText(/[R,r]([E,e]){3,}/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[0];

    log(
      "Received message from:",
      msg.from.id,
      "username:",
      msg.from.username,
      "chatId:",
      chatId
    );
    log("Sending response message:", resp);

    bot.sendMessage(chatId, resp);
  });
};
