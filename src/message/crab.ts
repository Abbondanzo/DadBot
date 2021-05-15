import { sendVideo } from "./_sendVideo";

export const crab = (config: Config) => {
  const videoUrl = "https://www.youtube.com/watch?v=9N7oSJiKwiQ";
  sendVideo(videoUrl, config);
};
