import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

type Input = {
  /**
   * The absolute or relative path to the file
   */
  path: string;
  /**
   * The search query
   */
  query: string;
};

export default async function ({ path, query }: Input) {
  const filePath = resolve(path);
  const content = await readFile(filePath, "utf8");
  const matches = content.match(new RegExp(query, "g"));

  return matches;
}
