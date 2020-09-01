import { config } from 'dotenv';
import * as TelegramBot from 'node-telegram-bot-api';

const init = () => {
    config();

    const token = process.env.API_KEY;

    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/[R,r]([E,e]){3,}/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[0];

        console.log(`${new Date().toISOString()} - Sending response message: ${resp}`);

        bot.sendMessage(chatId, resp);
    });
};

init();
