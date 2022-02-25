// in 操作符可以获取 联合类型中的每一种类型
type ObjectFromEntries<T> = {
    [K in T as K[0]] : K[1]
}