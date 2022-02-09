type Tuple<T extends number, U extends number[] = []> = U['length'] extends T ? U : Tuple<T, [number, ...U]>
type MinusOne< T extends number> = Tuple<T> extends [infer _, ...infer Y] ? Y['length'] : 0;