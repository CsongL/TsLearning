// union 类型 用extends判断 默认会使用分配率，一个个去判断，从而可以生成一个个序列
// 很有一中函数编程语言的感觉
type Permutation<T, U = T> = [T] extends [never]  // 分配率判断
                ? [] : T extends U 
                ? [T, ...Permutation<Exclude<U, T>>] : []  // 剔除这个属性后 接着判断