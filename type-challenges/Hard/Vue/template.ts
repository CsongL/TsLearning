// ThisType<>的作用就是指定这个属性里面this的类型
declare function SimpleVue<C, D, M>(options: {
    data(this: {}) : C,
    computed: D & ThisType<C>,
    methods: M & ThisType<C & M & { [K in keyof D] : D[K] extends (...args: unknown[]) => infer R ? R : never}>
}): any
