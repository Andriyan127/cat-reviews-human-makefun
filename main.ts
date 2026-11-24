import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "One star. He bought a laptop for work, then yelled when I sat on the keyboard. I was helping. The spreadsheet is better now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
