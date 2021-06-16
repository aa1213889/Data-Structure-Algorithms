/**
 *  push(element):添加一个新元素到栈顶位置
 *  pop()∶移除栈顶的元素，同时返回被移除的元素
 *  peek():返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它)
 *  isEmpty():如果栈里没有任何元素就返回true，否则返回false
 *  size():返回栈里的元素个数。这个方法和数组的length属性很类似
 *  toString():将栈结构的内容以字符形式返回
 */

/**
  * Array.pop()
  * const arr = ['z','x','c']   
  * arr.pop() //c
  * arr 为 ['z','x']
  */

/**
  * Array.join()
  * const arr = ['z','x','c']   
  * arr.join() //'z,x,c'
  * arr.join(' ') //'z x c'
  */
class Stack {
  constructor() {
    this.items = [] //栈的属性
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    return this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  toString () {
    return this.items.join(' ')
  }
}


const myStack = new Stack()

//入栈
myStack.push(2)
myStack.push(4)
myStack.push(6)
myStack.push(8)
myStack.push(10)

console.log(myStack.pop()) //10    10最后进 最先出
console.log(myStack.peek()) //8    10被出后 栈中数据从下往上为2 4 6 8
console.log(myStack.isEmpty()) //false   此时有四个元素
console.log(myStack.size()) //4   四个元素的长度
console.log(myStack.toString()) //'2 4 6 8' 四个元素转为字符串输出
