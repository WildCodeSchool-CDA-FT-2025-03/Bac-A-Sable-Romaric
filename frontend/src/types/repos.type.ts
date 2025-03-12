import type { Languages } from "./languages.type";

export type Repos = {
  description: string;
  id?: string;
  isPrivate: boolean;
  languages: Languages[];
  name: string;
  url: string;
};
