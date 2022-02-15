type Chunk<T extends any[], U, P extends any[] = []> = 
  T extends [infer Q, ...infer V] 
    ? [...P, any] extends { length: U } 
      ? [[...P, Q], ...Chunk<V, U, []>] 
      : V extends []
        ? [[...P, Q]] 
        : Chunk<V, U, [...P, Q]> 
    : T;