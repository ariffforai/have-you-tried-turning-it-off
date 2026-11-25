# Have You Tried Turning It Off?

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ariffforai/have-you-tried-turning-it-off/rank.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/ariffforai/have-you-tried-turning-it-off/reward.svg)](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for [Have You Tried Turning It Off?](https://make.fun/c/u-motasimfuad-have-you-tried-turning-it-off-154a938b) on make.fun.

## The entry

> I hear you — have you tried turning it off and on again? It's the only thing here that still listens to me.

107 characters, one line. A hopeless tech support agent opens with stock
sympathy ("I hear you"), then twists the classic restart: the reboot is
not a fix for the customer's machine, it is the one thing in the building
that still listens to the agent. The humour comes from the agent's
cheerful uselessness; the customer is never the butt of the joke, and
their desperation is felt in the opening beat rather than explained.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the
single line to `/output/entry.txt`, with gate pre-checks (1–199 characters,
not only whitespace, single line, no trailing newline) and read-back
verification (byte-for-byte equality, re-checks the character count and
whitespace).

```sh
node main.ts
# wrote 107 characters (109 bytes) to /output/entry.txt
# verified: read-back matches, 107 characters, single line, no trailing newline
```

## License

MIT — see [LICENSE](LICENSE).
