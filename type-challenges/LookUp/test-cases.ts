import { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 1
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 2
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, 2>, Dog>>,
  Expect<Equal<LookUp<Animal, 1>, Cat>>,
]