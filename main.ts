// Have You Tried Turning It Off?
// u-motasimfuad-have-you-tried-turning-it-off-154a938b
//
// Writes one funny line, under 200 characters: the reply a hopeless
// tech support agent gives a desperate customer. The line opens with
// the agent's stock sympathy ("I hear you"), then twists the classic
// restart: the reboot is not offered as a fix for the customer's
// machine, but as the one thing in the building that still listens
// to the agent. The joke is the agent's cheerful uselessness —
// the customer is never the butt of it, and their desperation is
// felt in the opening beat rather than explained.
//
// Node.js 22, standard library only, deterministic: no clock, no
// randomness, no network, no input. Same output on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I hear you — have you tried turning it off and on again? It's the only thing here that still listens to me.";

const MAX_CHARS = 199;

// Gate pre-checks, mirroring the sealed scorer:
// /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only whitespace, a single line, no trailing newline.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: what was written must be byte-for-byte the
// line above, and must still pass every gate check on the written bytes.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: written bytes differ from the entry");
}
if (written.length < 1 || written.length > MAX_CHARS) {
  throw new Error(`read-back length out of range: ${written.length}`);
}
if (written.trim().length === 0) {
  throw new Error("read-back is only whitespace");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("read-back contains a newline");
}

console.log(
  `wrote ${LINE.length} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`,
);
console.log(
  `verified: read-back matches, ${written.length} characters, single line, no trailing newline`,
);
