import TelegramBot from "node-telegram-bot-api";
import { goToBed } from "./poll/goToBed";
import { reee } from "./poll/reee";
import { log } from "./utils/log";

type PollHandler = (bot: TelegramBot, config: Config) => void;

const pollHandlers: { [key: string]: PollHandler } = {
  reee,
  "go-to-bed": goToBed,
};

const getPoller = (name: string) => {
  const handler = pollHandlers[name];
  if (!handler) {
    throw new Error(`Unsupported poll name ${name}`);
  }
  return handler;
};

export const handlePoll = (names: string[], config: Config) => {
  const handlers = names.map(getPoller);
  const bot = new TelegramBot(config.apiKey, { polling: true });
  log("Polling for", names.join(""));
  handlers.forEach((handler) => handler(bot, config));
};
