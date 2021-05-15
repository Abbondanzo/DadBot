import { sendVideo } from "./_sendVideo";

export const monday = (config: Config) => {
  const videoUrl = "https://www.youtube.com/watch?v=boIneoOo6wc";
  sendVideo(videoUrl, config);
};
