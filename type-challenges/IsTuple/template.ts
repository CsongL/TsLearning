type IsTuple<T extends any> = [T] extends [never] ? false : T extends any[] | readonly any[] ? number extends T['length'] ? false : true : false