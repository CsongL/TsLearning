type Split<S extends string, SEP extends string> = S extends `${infer F}${SEP}${infer L}` ? [F, ...Split<L, SEP>] : SEP extends '' ? [] : string extends S ? string[] : [S]