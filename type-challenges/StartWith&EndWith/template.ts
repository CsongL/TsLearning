type StartWith<T extends string, U extends string> = T extends `${U}${infer L}` ? true : false
type EndWith<T extends string, U extends string> = T extends `${infer S}${U}` ? true : false