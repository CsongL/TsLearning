import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<First<[1,2,3]>, 1>>,
    Expect<Equal<First<[() => string, 2]>, () => string>>,
    Expect<Equal<First<[]>, never>>,

]