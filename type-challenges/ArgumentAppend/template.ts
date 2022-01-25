// 先判断参数是不是函数，然后在判断的过程中可以推断出 函数参数的类型，函数返回值的类型，从而向新生成的函数中添加对应的参数

type AppendArgument<Fn, A> = Fn extends (...args: infer X) => infer Y ? (...Results: [...X, A]) => Y : never