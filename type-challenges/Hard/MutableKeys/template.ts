type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type MutableKeys<T, K = keyof T> = K extends keyof T ? MyEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? never : K : never