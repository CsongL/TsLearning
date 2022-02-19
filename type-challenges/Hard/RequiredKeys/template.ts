// 如果一个对象里面只有 不确定属性 即 {bar? : string}, 那么 {} extends {bar? : string} 结果就位true
type T = {} extends {bar? : string} ? true : false;

type RequiredKeys<T> = keyof {
    [K in keyof T as {} extends Pick<T, K> ? never : K] : T[K]
}