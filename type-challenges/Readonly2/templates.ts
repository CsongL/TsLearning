// &符号表示的就是将多个类型合并为一个类型
type MyReadonly2<T, K = keyof T> = {
    readonly [P in keyof T as P extends K ? P : never] : T[P]
} & {
    [P in keyof T as P extends K ? never: P] : T[P]
}