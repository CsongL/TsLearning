type Prefix = '+' | '-'
type PercentageParser<A extends string> = A extends `${infer F}${infer L}`
                                          ? F extends Prefix 
                                            ? L extends `${infer B}%` ? [F, B, '%'] : [F, L, '']
                                            : A extends `${infer R}%` ? ['', R, '%'] : ['', A, '']
                                          : ['', '', '']