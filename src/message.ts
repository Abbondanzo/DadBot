import { friday } from "./message/friday";
import { wednesday } from "./message/wednesday";
import { env } from "./setup/env";

type MessageHandler = (config: Config) => void;

const messageHandlers: { [key: string]: MessageHandler } = {
  friday,
  wednesday,
};

export const handleMessage = (name: string) => {
  const handler = messageHandlers[name];
  if (!handler) {
    throw new Error(`Unsupported message name ${name}`);
  }
  handler(env);
};
