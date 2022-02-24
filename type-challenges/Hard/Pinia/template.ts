type MapGetters<T> = { [K in keyof T] : T[K] extends (...args: any[]) => infer R ? R : never }
declare function defineStore<S, G, A>(store : {
    id: string,
    state: () => S,
    getters: G & ThisType<Readonly<S> & MapGetters<G>>,
    actions: A & ThisType<S & Readonly<MapGetters<G>> & A>
}): S & MapGetters<G> & A