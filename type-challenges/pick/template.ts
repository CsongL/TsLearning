// K extends keyof T 是作为约束条件， 约束 泛型K的联合属性中的全部属性必须在泛型T中都有 
type MyPick<T, K extends keyof T > = {
    [P in K ] : T[P]
}