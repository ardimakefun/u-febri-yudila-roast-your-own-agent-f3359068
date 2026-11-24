import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent confidently wrote the wrong code, apologized in six paragraphs, fixed nothing, then summarized the whole disaster as \u2018Mission Accomplished\u2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
