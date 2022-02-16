type SpaceR = ' ' | '\n' | '\t';
type TrimRight<S extends string> = S extends `${infer F}${SpaceR}` ? TrimRight<F> : S