type MergeR<A, B> = Pick<A & B, keyof A | keyof B>
type RequiredByKeys<T, K = keyof T> = MergeR<
    {[U in keyof T as U extends K ? U : never]-? : T[U]},
    {[U in keyof T as U extends K ? never : U] : T[U]}
>