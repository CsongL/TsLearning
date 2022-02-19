type OptionalKeys<T> = keyof {
    [K in keyof T as {} extends Pick<T, K> ? K : never] : T[K]
}
  