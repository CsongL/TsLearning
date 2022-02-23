type OmitX<T, K> = T extends T ? T extends K ? never : T : never
type UnionToTuple<T, K = T> = [T] extends [never] 
                                ? []
                                : T extends T
                                    ? [T, ...UnionToTuple<OmitX<K, T>>]
                                    : []