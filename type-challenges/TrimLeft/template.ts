type Spaces = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Spaces}${infer R}` ? TrimLeft<R> : S