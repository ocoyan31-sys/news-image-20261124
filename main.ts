// SPDX-License-Identifier: MIT
// News Image 24 Nov 2026: copy the pre-rendered entry image to the output dir.
// The image itself is drawn once at build time; the program only places it.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
// entry.png sits next to this file in the repository root.
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
