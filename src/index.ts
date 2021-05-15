// This has to be at the top of the file
// https://github.com/yagop/node-telegram-bot-api/issues/319
(process.env.NTBA_FIX_319 as any) = 1;

import { handleMessage } from "./message";
import { handlePoll } from "./poll";
import { args } from "./setup/args";
import { env } from "./setup/env";

const command: "message" | "poll" = args._[0] as any;

const messageHandlerName = args.name;

// If only one is specified, it is a string
const pollHandlerNames =
  typeof args.names === "string" ? [args.names] : args.names;

const config = Object.assign({}, env);

switch (command) {
  case "message":
    handleMessage(messageHandlerName, config);
    break;
  case "poll":
    handlePoll(pollHandlerNames, config);
    break;
  default:
    throw new Error(`Unhandled command ${command}`);
}
