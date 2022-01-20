import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>, // 字面量类型， 123就是字面量类型的一种
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
]

interface ComplexObject {
    a: ['12', 'foo'],
    bar: 'hello',
    prev(): number,
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2