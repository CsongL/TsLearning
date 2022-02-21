type ToUnion<T> = 
  T extends Array<infer A> // 
    ? ToUnion<A>
    : T extends () => infer A
      ? A
      : T extends abstract new (...args: any) => any
        ? InstanceType<T>
        : any

type Props<P> = {
  [key in keyof P]: P[key] extends { type: infer A } ? ToUnion<A> : ToUnion<P[key]>
}

declare function VueBasicProps<D, C, M, P>(options: {
  data(this: Props<P>): D,
  computed: C & ThisType<D>,
  methods: M & ThisType<D & M & { [K in keyof C]: C[K] extends (...args: any[]) => infer R ? R : never } & Props<P>>
  props: P
}): any;