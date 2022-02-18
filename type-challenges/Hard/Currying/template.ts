type Curr<A, R> = A extends [infer F, ...infer L] ? (a: F) => Curr<L, R> : R

declare function Currying<F>(fn: F) : F extends (...a: infer A) => infer R ? Curr<A, R> : never  