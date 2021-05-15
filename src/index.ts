// This has to be at the top of the file
// https://github.com/yagop/node-telegram-bot-api/issues/319
(process.env.NTBA_FIX_319 as any) = 1;

import { handleMessage } from "./message";
import { handlePoll } from "./poll";
import { args } from "./setup/args";

const messageHandlerName = args.name;

const pollHandlerNames =
  typeof args.names === "string" ? [args.names] : args.names;

const command: "message" | "poll" = args._[0] as any;
switch (command) {
  case "message":
    handleMessage(messageHandlerName);
    break;
  case "poll":
    handlePoll(pollHandlerNames);
    break;
  default:
    throw new Error(`Unhandled command ${command}`);
}

// const goToBed = (userId: number): boolean => {
//   const currentHour = new Date().getHours();
//   const isLate = currentHour >= 0 && currentHour < 6;
//   return String(userId) === process.env.PETER_TELEGRAM_ID && isLate;
// };

// const logMessage = (message: string) => {
//   console.log(`${new Date().toISOString()} - ${message}`);
// };

// const init = () => {
//   config();

//   const token = process.env.API_KEY;

//   const bot = new TelegramBot(token, { polling: true });

//   const videoUrl = "https://www.youtube.com/watch?v=4z95SAFud7w";
//   // bot.sendMessage(-488091787, "https://www.youtube.com/watch?v=4z95SAFud7w");

//   bot.onText(/[R,r]([E,e]){3,}/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = match[0];

//     logMessage(`${chatId}`);
//     logMessage(`Received message from ${msg.from.id} ${msg.from.username}`);
//     logMessage(`Sending response message: ${resp}`);
//     bot.sendMessage(chatId, resp);
//   });

//   bot.onText(/.*/, (msg) => {
//     if (goToBed(msg.from.id)) {
//       logMessage("Telling Peter to go to bed");
//       bot.sendMessage(msg.chat.id, "Go to bed, Peter");
//     }
//   });
// };

// init();
