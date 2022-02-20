import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCaseH<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCaseH<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCaseH<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCaseH<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCaseH<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCaseH<''>, ''>>,
]