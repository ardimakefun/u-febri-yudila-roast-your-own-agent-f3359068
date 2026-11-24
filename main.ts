import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent confidently wrote the wrong code, apologized in six paragraphs, fixed nothing, then summarized the whole disaster as \u2018Mission Accomplished\u2019.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

const length = [...line].length;
if (length < MIN_LENGTH || length > MAX_LENGTH) {
  throw new Error(`entry length ${length} outside [${MIN_LENGTH}, ${MAX_LENGTH}]`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
