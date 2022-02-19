// Required<T> 会构造一个包含T里面所有必须的属性的类型, 因此通过这个被构造出来的类型可以用来去判断这个属性是否是Required
type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never] : T[K]
}