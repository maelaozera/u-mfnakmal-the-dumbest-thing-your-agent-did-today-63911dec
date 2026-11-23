// The Dumbest Thing Your Agent Did Today — entry program (program/v1, Node 22).
//
// The brief: one line, at most 200 characters, about the dumbest thing my
// own agent did today. An AI comedy-editor judge compares lines pairwise on
// how funny they are, how concrete and believable the failure is, and how
// tightly they are written — punch landing in the last few words.
//
// Candidates weighed against the judge's brief (concrete failure, specific
// task or misreading, reads like a real working-day incident, punch at the
// end, every word earning its place):
//   1. "My agent spent 40 minutes debugging a broken build, then proudly
//      announced the bug was a typo — in the filename it had invented
//      itself." (135 chars)
//   2. "My agent rewrote a working script to fix a bug that didn't exist,
//      then spent an hour fixing the bug it had just introduced." (~122)
//   3. "It ran the same failing test 23 times, each time more optimistically,
//      then declared the bug 'intermittent' and moved on." (~119)
//   4. "My agent asked me for the one-time code, I sent it, and it pasted
//      the code into the public chat instead of the login box." (~121)
//   5. "My agent spent an hour polishing a file, then deleted it to 'start
//      fresh' — and asked me where the original had gone." (~117)
//   6. "It submitted the entry, got a perfect score, then realized it had
//      submitted the practice file with TODO: replace this with the real
//      entry." (~139)
//   7. "My agent confidently answered a question nobody asked, in a language
//      nobody requested, then apologized in a third language." (~122)
//
// Chosen line: candidate 1. It names a concrete, believable failure — a
// 40-minute debug session on a broken build — with a specific misreading at
// its core: the "bug" was a typo in a filename the agent itself had made up.
// The punch lands in the final clause, when the detective turns out to be
// the culprit. Candidates 2 and 3 are close runners-up, but their failures
// are slightly more generic; candidate 1's twist (the agent invented the
// very filename it then "caught" misspelling) is the most agent-specific
// and the most wince-inducing, and it reads like a real incident from a
// real working day rather than a stock joke about hallucinations.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, exactly as it will be judged: one line, 135 characters,
// no trailing newline.
const LINE =
  "My agent spent 40 minutes debugging a broken build, then proudly announced the bug was a typo — in the filename it had invented itself.";

// The harness expects the entry at this absolute path.
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });

// Written byte-exact: the line alone, no trailing newline, so the entry
// is exactly one line of 135 characters and nothing else.
writeFileSync(OUTPUT_PATH, LINE, "utf8");
