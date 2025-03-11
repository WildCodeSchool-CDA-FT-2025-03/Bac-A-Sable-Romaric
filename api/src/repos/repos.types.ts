import type { Language } from "../languages/languages.type";

type Repos = {
  description: string;
  id: string;
  isPrivate: boolean;
  languages: Language[];
  name: string;
  url: string;
  [key: string]: any;
};

type Fields = "description" | "id" | "isPrivate" | "languages" | "name" | "url";

export { Repos, Fields };
