import type { Language } from "../languages/languages.type";

type Repos = {
  createdAt: string;
  description: string;
  diskUsage: number;
  id: string;
  isPrivate: boolean;
  languages: Language[];
  name: string;
  updatedAt: string;
  url: string;
  [key: string]: any;
};

type Fields =
  | "createdAt"
  | "description"
  | "diskUsage"
  | "id"
  | "isPrivate"
  | "languages"
  | "name"
  | "updatedAt"
  | "url";

export { Repos, Fields };
