import { Expect, Equal } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Pop<[1,2,3,4]>, [1,2,3]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
]