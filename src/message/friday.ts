import { sendVideo } from "./_sendVideo";

export const friday = (config: Config) => {
  const videoUrl = "https://www.youtube.com/watch?v=4z95SAFud7w";
  sendVideo(videoUrl, config);
};
