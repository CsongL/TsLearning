type Unique<T, U extends any[] = []> = T extends [infer F, ...infer L] ? F extends U[number] ? Unique<L, U> : Unique<L, [...U, F]> : U