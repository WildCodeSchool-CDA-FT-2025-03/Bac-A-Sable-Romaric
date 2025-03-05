import type { Language } from "../languages/languages.type";

export type Repos = {
  id: string;
  isPrivate: boolean;
  url: string;
  languages: Language[];
};
