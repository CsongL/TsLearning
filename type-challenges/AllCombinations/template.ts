type PermutationUnion<T extends string, U extends string = T> = [T] extends [never] ? '' : T extends string ? `${T | ''}${PermutationUnion<Exclude<U, T>>}` : never
type StringToUnionP<S extends string> = S extends `${infer F}${infer L}` ? F | StringToUnionP<L> : never;
type AllCombinations<S extends string> = PermutationUnion<StringToUnionP<S>>