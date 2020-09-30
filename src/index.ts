import { config } from 'dotenv';
import * as TelegramBot from 'node-telegram-bot-api';

const goToBed = (userId: number): boolean => {
    const currentHour = new Date().getHours();
    const isLate = currentHour >= 0 && currentHour < 6;
    return String(userId) === process.env.PETER_TELEGRAM_ID && isLate;
};

const logMessage = (message: string) => {
    console.log(`${new Date().toISOString()} - ${message}`);
};

const init = () => {
    config();

    const token = process.env.API_KEY;

    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/[R,r]([E,e]){3,}/, (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[0];

        logMessage(`Received message from ${msg.from.id} ${msg.from.username}`);
        logMessage(`Sending response message: ${resp}`);
        bot.sendMessage(chatId, resp);
    });

    bot.onText(/.*/, (msg) => {
        if (goToBed(msg.from.id)) {
            logMessage('Telling Peter to go to bed');
            bot.sendMessage(msg.chat.id, 'Go to bed, Peter');
        }
    });
};

init();
