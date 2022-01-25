// 得到数组长度的方式 是 A = [1,2,3] 获取对应数组的长度的方法是 A['length']

type LengthOfString<S extends string, C extends any[] = []> = S extends `${infer F}${infer L}` ? LengthOfString<L, [...C, F]> : C['length']