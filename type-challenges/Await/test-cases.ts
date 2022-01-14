import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{field: number}>
type Z = Promise< string | number>

type cases = [
    Expect<Equal<Await<X>, string>>,
    Expect<Equal<Await<Y>, {field: number}>>,
    Expect<Equal<Await<Z>, string | number>>
]