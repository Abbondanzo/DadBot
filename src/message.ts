import { friday } from "./message/friday";
import { monday } from "./message/monday";
import { wednesday } from "./message/wednesday";

type MessageHandler = (config: Config) => void;

const messageHandlers: { [key: string]: MessageHandler } = {
  monday,
  wednesday,
  friday,
};

export const handleMessage = (name: string, config: Config) => {
  const handler = messageHandlers[name];
  if (!handler) {
    throw new Error(`Unsupported message name ${name}`);
  }
  handler(config);
};
