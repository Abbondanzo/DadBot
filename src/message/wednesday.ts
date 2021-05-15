import { sendVideo } from "./_sendVideo";

const videos = [
  // It Is Wednesday My Dudes
  "https://www.youtube.com/watch?v=du-TY1GUFGk",
  // FRIED CHICKEN WEDNESDAY BABY
  "https://www.youtube.com/watch?v=JMWYArd2ITw",
];

export const wednesday = (config: Config) => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  const videoUrl = videos[randomIndex];
  sendVideo(videoUrl, config);
};
