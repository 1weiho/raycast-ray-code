import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

type Input = {
  /**
   * The absolute or relative path to the directory
   */
  path: string;
};

export default async function ({ path }: Input) {
  const dirPath = resolve(path);
  const files = await readdir(dirPath);

  return files;
}
