import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const EPITAPH = "Autocorrect changed 1 letter in my 4-word epitaph. 'Dad' became 'Dan'. Dan is alive, and he is furious.";
// One letter, one wrong man: the phone rewrote the dead man's epitaph.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, EPITAPH, "utf8");
chmodSync(target, 0o644);
