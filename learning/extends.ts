import {Expect, Equal } from '@type-challenges/utils'
// extends 用法
// 第一种 类的继承，或者说是接口继承
// 第二种 用于条件判断 判断一个类型是否是另一个类型的子类
// 第三种 泛型条件判断 会注意采用分配率

// 第一种 类型继承
interface Animal {
    name: string
}

interface Dog extends Animal {
    legs: number
}

// 普通条件判断
type A = Dog extends Animal ? string : number;


//泛型条件判断， 采用分配率的形式来判断，然后得到相应的结果

type MyType<T> = T extends 'x' ? number : string
type Result = MyType<'x' | 'y'>; // => number | string

let a : Result = 1
let b : Result = 'zai'

// 实现Exclude<T, P> 如果T中的属性也在P中出现，那么将这个属性剔除
type MyExclude<T, P> = T extends P ? never : T;

type Exclude1 = string | number;
type Exclude2 = number
type ExResult = Expect<Equal<string, MyExclude< Exclude1, Exclude2>>> // => number

// 实现Extract 如果T中的属性也在P中出现，那么将其从T中抽离出来
type MyExtract<T, P> = T extends P ? T : never;
type TrResult = Expect<Equal<number, MyExtract<Exclude1, Exclude2>>>