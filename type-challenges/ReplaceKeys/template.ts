type ReplaceKeys<U, T, Y> = {
    [K in keyof U] : K extends keyof Y
                    ? Y[K]
                    : K extends Exclude<keyof U, T>
                    ? U[K]
                    : never
}