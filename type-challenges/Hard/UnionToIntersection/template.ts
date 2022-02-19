// document address: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
// 可以通过构造函数的方式将我们所想要获得的类型推断出来，从而获得相应的类型
type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends (arg: infer P) => any ? P : never;