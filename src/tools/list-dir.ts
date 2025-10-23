import { readdir } from "node:fs/promises";

type Input = {
  /**
   * The absolute or relative path to the directory
   */
  path: string;
};

export default async function ({ path }: Input) {
  const files = await readdir(path);
  return files;
}
