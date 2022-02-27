enum Comparison {
    Greater,
    Equal,
    Lower,
  }
  

type GetPositive<T extends number> = `${T}` extends `-${infer NT}` ? NT : never
type IsPositive<T extends number > = `${T}` extends `-${infer NT}` ? false : true;

type EasyEqual<A extends number | string , B extends number | string> = A extends B ? B extends A ? true : false : false

type Compare<
  A extends number | string,
  B extends number | string,
  R extends any[] = []
> = EasyEqual<`${A}`, `${R['length']}`> extends true
  ? true
  : EasyEqual<`${B}`, `${R['length']}`> extends true
  ? false
  : Compare<A, B, [...R, 1]>;


  type Comparator<A extends number, B extends number> = EasyEqual<A, B> extends true
  ? Comparison.Equal
  : IsPositive<A> extends true
    ? IsPositive<B> extends true
        ? Compare<A, B> extends true
            ? Comparison.Lower
            : Comparison.Greater
        : Comparison.Greater
    : IsPositive<B> extends true
        ? Comparison.Lower
        : Compare<GetPositive<A>, GetPositive<B>> extends true
            ? Comparison.Greater
            : Comparison.Lower;
