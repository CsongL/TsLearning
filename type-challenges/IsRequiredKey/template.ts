type IsRequiredKey<T, K extends keyof T> = T[K] extends NonNullable<T[K]> ? true : false;

// 解释 
// NonNullable<Type> 是去除类型中的 undefined 和 null
// T[K] 对于一个可选属性来说 它的值是 type| undefined 因为这个值可能没有传
// 因此 如果 T[K] extends NonNullable<T[K]> 为 true的话，那么说明这个属性不是可选属性
// example
type obj = {
    a : number, 
    b? : string
}

type kValue = obj['b'];
type KNonNull = NonNullable<obj['b']>