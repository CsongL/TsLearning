// infer 推断输入的变量的值是什么类型 
// 例如： T extends Promise<infer R> 中 infer R 就是指推断 Promise 中变量的类型是什么 并将推断出的变量的类型赋值给R，那么R就表示的是Promise<value>中value变量的类型
// R 表示的是这个变量的类型，而不是这个变量
type Await<T extends Promise<unknown>> = T extends Promise<infer R> ? R : never;

