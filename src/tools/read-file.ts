import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

type Input = {
  /**
   * The absolute or relative path to the file
   */
  path: string;
  /**
   * Text encoding. Defaults to utf-8.
   */
  encoding?: BufferEncoding;
};

type Output = {
  content: string;
};

export default async function ({ path, encoding = "utf8" }: Input): Promise<Output> {
  if (!path) {
    throw new Error("path is required");
  }

  const filePath = resolve(path);
  const content = await readFile(filePath, { encoding });

  return { content };
}
