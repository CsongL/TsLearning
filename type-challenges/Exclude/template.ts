// 利用extends的泛型分配率机制 去判断
type MyExclude<T, U> = T extends U ? never : T;