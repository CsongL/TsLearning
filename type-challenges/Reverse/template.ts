type Reverse<T extends unknown[]> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] :  []