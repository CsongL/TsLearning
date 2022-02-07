type KebabCase<S extends string, P extends string = ''> = S extends `${infer F}${infer L}`
                                                          ? F extends Lowercase<F> 
                                                          ? `${F}${KebabCase<L, '-'>}`
                                                          : `${P}${Lowercase<F>}${KebabCase<L, '-'>}`
                                                          : S;