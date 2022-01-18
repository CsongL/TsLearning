import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1,2,3], 0>, [0, 1, 2, 3]>>,
    Expect<Equal<Unshift<['1', '2', '3'], boolean>, [boolean, '1', '2', '3']>>
]