type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  type UnionMapKey = keyof ControlsMap;
  type ParsePrintFormat<S extends string, F extends string[] = []> = S extends `${infer First}%${infer Second}${infer Third}`
                                                                      ? Second extends UnionMapKey
                                                                          ? ParsePrintFormat<Third, [...F, ControlsMap[Second]]>
                                                                          : ParsePrintFormat<Third, F>
                                                                      : F