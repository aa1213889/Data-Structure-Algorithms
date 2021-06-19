/**
 * 
  • enqueue(element):向队列尾部添加一个(或多个)新的项
  • dequeue()︰移除队列的第一（即排在队列最前面的)项，并返回被移除的元素
  • front():返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似)
  • isEmpty():如果队列中不包含任何元素，返回true，否则返回false
  • size():返回队列包含的元素个数，与数组的length属性类似
  • toString():将队列中的内容,转成字符串形式
 */

/**
 * Array.shift
 * 删除数组中的第一个元素
 * const arr = [1,2,3]
 * arr.shift()  //1
 * arr //[2,3]
 * 队列中使用数组实现性能会劣与链表实现
 * 因为删除数组的第一个元素 后面的元素下标都会减一 内容多的话会影响性能
 */

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join(' ')
  }
}

const myQueue = new Queue()
myQueue.enqueue(2)
myQueue.enqueue(4)
myQueue.enqueue(6)
myQueue.enqueue(8)
myQueue.enqueue(10)

console.log(myQueue.items) //[ 2, 4, 6, 8, 10 ]

console.log(myQueue.dequeue()) //2    2最先进 最先出
console.log(myQueue.front()) //4    2被出后 队列中先进的内容为 4 6 8 10
console.log(myQueue.isEmpty()) //false   此时有四个元素
console.log(myQueue.size()) //4   四个元素的长度
console.log(myQueue.toString()) //'4 6 8 10' 四个元素转为字符串输出
