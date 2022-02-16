type Without<T extends unknown[], U extends number[] | number> = T extends [infer F, ...infer L]
                                                                ? F extends Exclude<T[number], U extends number[]? U[number] : U>
                                                                    ? [F, ...Without<L, U>]
                                                                    : Without<L, U>
                                                                : T