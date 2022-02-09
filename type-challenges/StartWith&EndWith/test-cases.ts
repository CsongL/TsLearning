import { Expect, Equal } from '@type-challenges/utils'

type cases = [
    Expect<Equal<StartWith<'abc', 'ac'>, false>>,
    Expect<Equal<StartWith<'acv', 'ac'>, true>>,
    Expect<Equal<EndWith<'adc', 'dc'>, true>>,
    Expect<Equal<EndWith<'ade', 'dv'>, false>>,
]