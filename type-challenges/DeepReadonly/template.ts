// 判断这个键的类型是不是基本的数据类型，是的话就设置为readonly, 如果是对象的话 就循环DeepReadonly<T[P]>

type Primitive = string | number | boolean | null | undefined | symbol | Function

type DeepReadonly<T> = {
  readonly [P in keyof T] : T[P] extends Primitive? T[P] : DeepReadonly<T[P]>
}
