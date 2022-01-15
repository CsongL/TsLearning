import { Expect, Equal } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Concat<[1,2,3], [4,5,6]>, [1,2,3,4,5,6]>>,
    Expect<Equal<Concat<[1,2,3], ['a', 'b', 'c']>, [1,2,3, 'a', 'b', 'c']>>
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]