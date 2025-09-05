import "dotenv/config"; // נטען בצד Node בלבד
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "SwipePostManager",
  slug: "SwipePostManager",
  extra: {
    API_URL: process.env.API_URL ?? "https://jsonplaceholder.typicode.com",
  },
};

export default config;
