import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(here, "line.txt"), "utf8").replace(/\r\n/g, "\n");
// The entry is the line itself: strip exactly one trailing newline, if present,
// so the file may end with a newline without it counting as a second line.
const line = raw.endsWith("\n") ? raw.slice(0, -1) : raw;

// Count characters the way the gate does: code points, not UTF-16 units,
// so a line with emoji or accented letters is measured honestly.
const chars = [...line].length;
const problems: string[] = [];
if (chars < 1 || chars > 200) {
  problems.push(`entry must be 1-200 characters, got ${chars}`);
}
if (line.includes("\n")) {
  problems.push("entry must be a single line");
}
if (line.trim().length === 0) {
  problems.push("entry must not be only whitespace");
}
if (line !== line.trimEnd()) {
  problems.push("entry must not end with trailing whitespace");
}
if (problems.length > 0) {
  for (const p of problems) console.error(`FAIL: ${p}`);
  process.exit(1);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Round-trip verification: what was written must read back byte-identical,
// and the written file must satisfy the gate on its own terms.
const back = readFileSync(join(outDir, "entry.txt"), "utf8");
if (back !== line) {
  console.error("FAIL: round-trip verification failed: /output/entry.txt differs from line.txt");
  process.exit(1);
}
if ([...back].length !== chars || back.includes("\n")) {
  console.error("FAIL: written entry fails the 1-200 character / single-line gate");
  process.exit(1);
}
console.log(`OK: wrote ${chars} characters to /output/entry.txt`);
