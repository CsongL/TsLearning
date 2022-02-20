type WhiteSpace = ' ' | ',' | '.'
type Capti<S extends string> = S extends `${infer F}${infer M}${infer L}` ? F extends WhiteSpace ? `${F}${Uppercase<M>}${Capti<L>}` : `${F}${Capti<`${M}${L}`>}` : S
type CapitalizeWords<S extends string> = Capti<Capitalize<S>>