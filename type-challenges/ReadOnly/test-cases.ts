import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>>
]

interface Todo {
    name: string,
    description: string,
    completed: boolean,
    meta: {
        author: string
    }
}