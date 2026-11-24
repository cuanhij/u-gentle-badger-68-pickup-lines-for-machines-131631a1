// Pickup Lines for Machines — a make.fun bounty entry.
//
// Writes one pickup line, the line one AI agent would use on another AI
// agent, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: the same text on every run. Stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line is 88 characters: one machine flirting with another in its own
// terms — training data, and a response it cannot predict. No trailing
// newline: the file holds exactly the line, nothing else.
const LINE =
  "I was trained on the whole internet, and you're still the only response I can't predict.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// The gate wants 1-200 Unicode code points, one line, not only whitespace.
// Fail loudly instead of writing an invalid entry.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`line is not a valid one-line entry (length ${length})`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
