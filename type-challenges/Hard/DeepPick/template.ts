// 通过函数参数的形式将Union类型的type转变为 Intersection类型
type DeepPick<O, S> = UnionToIntersection<
    S extends `${infer F}.${infer L}` ? {
        [K in keyof O as K extends F ? K : never] : O[K] extends object ? DeepPick<O[K], L> : O[K]
    } : S extends '' ? unknown : {
        [K in keyof O as K extends S ? K : never] : O[K]
    }
>