import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse — one line, under 200 characters.
const ENTRY =
  "My ceiling started leaking onto my bed at 4am, so I've spent the morning catching drips in saucepans and I'm taking the day off before the house files for divorce.";

// Gate: the entry must be 1–200 characters of real text, never only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Round-trip self-check: read the file back and confirm it is byte-identical.
const roundTrip = readFileSync("/output/entry.txt", "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip check failed: /output/entry.txt differs from ENTRY");
}

console.log(ENTRY);
