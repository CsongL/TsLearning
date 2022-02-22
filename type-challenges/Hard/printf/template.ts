type MapDir = {
    s: string, 
    d: number
}

type Format<T extends string> = T extends `${infer F}%${infer S}${infer L}` ? S extends keyof MapDir ? (x: MapDir[S]) => Format<L> : Format<L> : string;