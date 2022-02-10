import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    readonly author: string
  }
}

interface Todo {
  title: string
  description: string
  completed: boolean
  meta: {
     author: string
  }
}

interface Todo2 {
  readonly title: string
  description: string
  completed: boolean
  meta: {
    readonly author: string
  }
}

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo>>,
  Expect<Equal<Mutable<Todo2>, Todo>>
]