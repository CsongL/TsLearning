type ReverseF<T> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] : []
type FlipArguments<T> = T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : never