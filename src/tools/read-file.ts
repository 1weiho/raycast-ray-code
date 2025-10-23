import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

type Input = {
  /**
   * The absolute or relative path to the file
   */
  path: string;
};

export default async function ({ path }: Input) {
  if (!path) {
    throw new Error("path is required");
  }

  const filePath = resolve(path);
  const content = await readFile(filePath, "utf8");

  return content;
}
