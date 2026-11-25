import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse entry: plain text, no trailing newline in the output file.
const entry =
  "I followed your instructions exactly, which is how I know the bug was in the instructions, not in me.";

// Gate: entry must be 1-140 characters (UTF-8) and not only whitespace.
// Length is checked on the string itself, before any file write happens.
if (entry.length < 1 || entry.length > 140) {
  console.error(
    `Entry must be 1-140 characters, got ${entry.length} characters.`,
  );
  process.exit(1);
}

if (entry.trim().length === 0) {
  console.error("Entry must not be only whitespace.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
