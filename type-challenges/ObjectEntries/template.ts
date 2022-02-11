type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, Required<T>[U]]: never
