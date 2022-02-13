type Flip<T extends {[key : PropertyKey] : any}> = {
    [K in keyof T as `${T[K]}`] : K
}