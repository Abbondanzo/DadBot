import { sendVideo } from "./_sendVideo";

export const wednesday = (config: Config) => {
  const videoUrl = "https://www.youtube.com/watch?v=du-TY1GUFGk";
  sendVideo(videoUrl, config);
};
