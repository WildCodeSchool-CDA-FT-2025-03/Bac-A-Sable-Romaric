import type { Languages } from "./languages.type";

export type Repos = {
  createdAt: string;
  description: string;
  diskUsage: number;
  id?: string;
  isPrivate: boolean;
  languages: Languages[];
  name: string;
  updatedAt: string;
  url: string;
};
