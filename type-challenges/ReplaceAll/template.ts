// 实现的难点在于 如何替换字符串中所有匹配到的字符：采用函数式语言中 的递归的思想
// 另外一个自己没有想到的地方在于 替换完之后, 如果用新生成的字符串在匹配一遍，那么很可能会将已经替换过的字符又匹配一编，导致最终的结果并不是自己所期待的
// 解决办法其实就是 只对匹配到的字符之后的字符串进行匹配， 已经匹配过的就不管了

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer X}${From}${infer Y}` ? `${X}${To}${ReplaceAll<Y, From, To>}` : S