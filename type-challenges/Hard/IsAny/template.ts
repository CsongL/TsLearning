// {} extends T  {} 是 非空属性, 因此 能匹配上的T只能是 any, unknown, {}
// T extends null 因为 unknown 不能赋值给类型, {} 是非空的因此不能匹配，最后 如果能够匹配的话 就只能是any

type IsAny<T> = [{}, T] extends [T, null] ? true : false;