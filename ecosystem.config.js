module.exports = {
  apps: [
    {
      name: "dadbot-poll",
      script: "./lib/index.js",
      args: "poll reee",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "128M",
      env: {
        NODE_ENV: "production",
        API_KEY: "ADD_HERE",
        CHAT_IDS: ["CHAT_ID_HERE"],
      },
      log_date_format: "DD-MM HH:mm:ss.SSS",
    },
  ],
};
