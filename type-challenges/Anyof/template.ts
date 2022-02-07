type False = 0 | '' | false | [] | Record<any, never>
type AnyOf<T extends any[]> = T extends [infer F, ...infer L] ? F extends False ? AnyOf<L> : true : false;