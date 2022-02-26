type IsPalindrome<T extends string | number> = `${T}` extends `${infer F}${infer L}`
                                                ? L extends ''
                                                    ? true 
                                                    :L extends `${infer M}${F}`
                                                        ? IsPalindrome<M>
                                                        : false
                                                : false