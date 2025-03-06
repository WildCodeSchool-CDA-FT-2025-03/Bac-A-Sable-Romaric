import type { Language } from "../languages/languages.type";

type Repos = {
  id: string;
  isPrivate: boolean;
  url: string;
  languages: Language[];
  [key: string]: any;
};

type Fields = "id" | "isPrivate" | "url" | "languages";

export { Repos, Fields };
