// 遍历一个数组, [k in keyof T] : T[k]
// 判断数组中元素的类型  T[k] extends Promise<infer R> ? R : T[K]
// 因为测试用例 有 const 所以需要规定 参数 readonly
declare function PromiseAll<T extends any[]>(values: readonly [...T]) : Promise<{ [K in keyof T] : T[K] extends Promise<infer R> ? R : T[K]}>