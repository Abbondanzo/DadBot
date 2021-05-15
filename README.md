# DadBot

Telegram bot that screeches with you. There's really no reason to use this code. If you have feature requests, feel free to file a PR with that built.

## Configuration

Create a `.env` file at the root of this project with the following:

| Name     | Required        | Type   | Description                                                                                     |
| -------- | --------------- | ------ | ----------------------------------------------------------------------------------------------- |
| API_KEY  | Yes             | String | Your Telegram bot API key. See [obtaining key](https://core.telegram.org/api/obtaining_api_id)  |
| CHAT_IDS | (for `message`) | Array  | An array of chat IDs for sending messages to. If this array is empty, polling runs in all chats |

## Usage

You can either use `yarn dev` to run from TypeScript, or `yarn build` to build and run from `yarn start` to run the script.

### Message

Send a video message. Perfect for cron jobs.

_Sends random Wednesday video to all of the chats in CHAT_IDS_

```bash
yarn dev message wednesday
```

### Polling

Runs as long as the process is alive. Perfect for responding to messages

_Replies to every "Reee" a user sends in the chat_

```bash
yarn dev message reee
```

_Replies to every "Reee" a user sends in the chat AND tells every user in the chat to sleep between midnight and 6am_

```bash
yarn dev message reee go-to-sleep
```
