type Diff<O, O1> = {
    [K in Exclude<keyof O | keyof O1, keyof O & keyof O1>] : (O & O1)[K];
}