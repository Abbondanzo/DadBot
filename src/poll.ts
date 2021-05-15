import TelegramBot from "node-telegram-bot-api";
import { reee } from "./poll/reee";
import { env } from "./setup/env";
import { log } from "./utils/log";

type PollHandler = (bot: TelegramBot, config: Config) => void;

const pollHandlers: { [key: string]: PollHandler } = {
  reee,
};

const getPoller = (name: string) => {
  const handler = pollHandlers[name];
  if (!handler) {
    throw new Error(`Unsupported poll name ${name}`);
  }
  return handler;
};

export const handlePoll = (names: string[]) => {
  const handlers = names.map(getPoller);
  const bot = new TelegramBot(env.apiKey, { polling: true });
  log("Polling for", names.join(""));
  handlers.forEach((handler) => handler(bot, env));
};
