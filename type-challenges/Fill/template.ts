type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    SC extends unknown[] = [],
    EC extends unknown[] = []
> = T extends [infer F, ...infer L]
    ? EC['length'] extends End 
        ? [F, ...Fill<L, N, Start, End, SC, EC>]
        : SC['length'] extends Start
            ? [N, ...Fill<L, N, Start, End, SC, [...EC, F]>]
            : [F, ...Fill<L, N, Start, End, [...SC, F], [...EC, F]>]
    : []