// 知识点： 默认值， Record<K, V> 根据 K生成一个新的对象，这个对象的key就是K，val就是V
// & intersection 将两个对象融合


type Chainable<T extends {} = {}> = {
    option<K extends string, V>(key: K, val: V): Chainable<T & Record<K, V>>
    get(): T
} 