// Charm the Commuter: Forecast a City That Isn't — make.fun entry (v2).
// Writes one line (at most 140 characters) to /output/entry.txt: a
// weather forecast for a city that does not exist. Glimmerwick:
// heavy fog of lost socks this morning, lifting by lunch —
// commuters are advised to travel in pairs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Glimmerwick: heavy fog of lost socks this morning, lifting by lunch. Commuters are advised to travel in pairs.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 140;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
