// 第一种 最简单 的 直接判断 这个对象的类型 是否是 {type: T} 即可确定是否为所想求的对象
type LookUp<U, T> = U extends {type : T} ? U : never;

// 第二种 在第一种的基础上 限制一下T 的类型要和 U中 type的类型保持一直
type LookUp2<U, T extends ( U extends {type: infer R} ? R : never)> = U extends {type : T} ? U :never