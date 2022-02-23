type StringToLength<S extends string, R extends number[] = []> = S extends `${infer F}${infer L}` ? StringToLength<L, [...R, number]> : R['length']