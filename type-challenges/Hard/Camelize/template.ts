type CamelizeArray<T> = T extends [infer F, ...infer R] ? [Camelize<F>, ...(R extends [] ? [] : CamelizeArray<R>)] : [] 
type Camelize<T> = T extends object
                   ? T extends any[]
                        ? CamelizeArray<T>
                        : {
                            [K in keyof T as K extends `${infer F}_${infer L}` ? `${F}${Capitalize<L>}` : K] : Camelize<T[K]>
                        }
                    : T