type Join<U extends unknown[], Divide extends string = ''> = U extends [infer F, ...infer R]
                                                             ? R extends []
                                                                ? F
                                                                : `${F & string}${Divide}${Join<R, Divide>}`
                                                            : ''
declare function join<T extends string>(delimiter: T):<U extends string[]> (...args: U) => Join<U, T>                                                            