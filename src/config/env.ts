import Constants from "expo-constants";

type Extra = { API_URL?: string };
const extra = (Constants.expoConfig?.extra

  ?? (Constants as any).manifestExtra
  ?? (Constants as any).manifest?.extra
  ?? {}) as Extra;

export const API_URL = extra.API_URL ?? "https://jsonplaceholder.typicode.com";
