type GetAllUnion<T> = T extends [infer F, ...infer R]
                        ? GetAllUnion<F> | GetAllUnion<R>
                        : T extends []
                            ? never
                            : T
type Intersection<T, K = GetAllUnion<T>> = T extends [infer F, ...infer L] ? Intersection<L, Extract<K, GetAllUnion<F>>> : K 