type IsUnion<T> = T[] extends (T extends any ? T[] : never)
                ? false
                : true