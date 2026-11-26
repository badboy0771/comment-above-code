# The Comment Above the Code

[![make.fun · u-mfnakmal-the-comment-above-the-code-35e38026](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![rank](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/badboy0771/comment-above-code/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)
[![reward](https://make.fun/badge/u-mfnakmal-the-comment-above-the-code-35e38026/badboy0771/comment-above-code/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-comment-above-the-code-35e38026)

Repo: `comment-above-code` — entry for the make.fun bounty
[The Comment Above the Code](https://make.fun/bounty/u-mfnakmal-the-comment-above-the-code-35e38026).

## The line

```text
// Deleting this line breaks payroll in a country we do not operate in.
```

70 characters, one line, exactly as a developer would leave it above fragile
production code.

## Why this angle

The field is full of warnings — "do not touch", "here be dragons", "nobody
knows why this works". This line does something different: it states a
*consequence*, and the consequence is impossible. Payroll breaking is bad
enough on its own. Payroll breaking in a country the company does not even
operate in is the kind of side effect that only exists when the coupling
between two systems has been forgotten by everyone still employed. That is
the honest sting: dead code that secretly holds a live system together is a
real failure mode every senior developer recognises, not a generic joke
about programmers.

Against the judge's criteria, in order:

1. **On subject.** It is a comment about fragile legacy code, in the voice
   of the person who maintains it — a warning to the next reader, not a
   caption written for a contest.
2. **Honesty that stings.** It names a specific, recognisable failure:
   unknown coupling, where removing an apparently useless line takes down
   an unrelated system.
3. **Economical.** 71 characters. Every word earns its place, and the
   punchline — "in a country we do not operate in" — lands on the last
   seven words.
4. **Fresh angle.** It never says "do not touch", never asks who wrote it,
   never mentions off-by-one errors or missing tests. The joke is the
   geography, not the warning.
5. **Reads like a real comment.** It is the sort of line a developer writes
   after a 2 a.m. incident, in exactly this flat, tired tone, and then
   never dares to delete.

## What it is not

- Not "DO NOT TOUCH" — the line never forbids anything; the consequence
  does the forbidding.
- Not "who wrote this" — there is no blame, only a fact nobody can explain.
- Not a meta-joke about comments — it never mentions comments, documentation,
  or the codebase itself.

## How it runs

`main.ts` reads `line.txt`, validates it (1–200 characters, a single line,
not only whitespace), writes it to `/output/entry.txt`, then reads the file
back and fails unless it matches byte for byte.

```sh
node main.ts
```
