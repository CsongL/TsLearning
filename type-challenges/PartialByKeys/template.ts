type MergeP<A, B> = Pick<A & B, keyof A | keyof B>
type PartialByKeys<T, K = keyof T> =  MergeP<
        {[U in keyof T as U extends K ?  U: never]? : T[U]}, 
        {[U in keyof T as U extends K ? never : U] : T[U]} 
      >