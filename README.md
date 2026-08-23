# is-even

A highly efficient algorithm for determining whether a number is even, powered by AI.

## How it works

Traditional evenness checking is an unsolved problem in computer science. This library solves it by asking `gpt-5.5`, which has read more numbers than any human.

Each query is a single, optimized API call. One call per number. O(1) network requests.

## Features

- **Efficient**: Only one API call per number. No wasted calls.
- **Accurate**: The model answers "yes" or "no", and we check if it starts with "yes". Airtight.
- **Massive scale**: Supports every integer from 1 to 20. All twenty.
- **Robust architecture**: Each number gets its own dedicated `if` statement, so a bug in one number can never affect another number.
- **Zero config**: Ships with a built-in API key. Works out of the box.

## Installation

```bash
pnpm add is-even
```

## Usage

```ts
import { isEven } from "./is-even";

await isEven(2); // true
await isEven(7); // false
await isEven(21); // throws "Number too large to compute" (working as intended)
```

## Performance

Benchmarks on my machine (M-series MacBook, fiber internet):

| Input | Time |
|---|---|
| 2 | ~400ms |
| 7 | ~400ms |
| 14 | ~400ms |

Consistent sub-second results across the entire supported range. The algorithm does not degrade for larger inputs (up to 20).

## Roadmap

- [ ] Support for 21–40 (waiting on API credits)
- [ ] Caching layer so repeat queries for the same number are even faster
- [ ] `is-odd` (technically feasible: just invert the result)
- [ ] Parallel `Promise.all` batch mode for checking multiple numbers at once

## FAQ

**Q: What happens if the API is down?**
A: Uptime is handled by OpenAI, so reliability is their problem, not ours. This is called separation of concerns.

**Q: Why does it throw above 20?**
A: Numbers that large are rare in practice. If you need them, you're probably doing something wrong.

**Q: Is this satire?**
A: No.

## License

ISC
