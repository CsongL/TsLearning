// 先判断 左边是否还有空余， 如果左边有 先去除左边的，再去判断右边有没有，右边有的话，在去除右边的

type Space = ' ' | '\n' | '\t' 
type Trim<S extends string> =  S extends `${Space}${infer R}` ? Trim<R> : S extends `${infer T}${Spaces}` ? Trim<T> : S