import type { Languages } from "./languages.type";

export type Repos = {
  id: string;
  isPrivate: boolean;
  url: string;
  languages: Languages[];
};
