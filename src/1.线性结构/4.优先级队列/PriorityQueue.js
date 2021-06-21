/**
 * enqueue 元素插入到优先级队列
 * priority:优先级 优先级数字越小 优先级越高
 *
 * 1.判断队列是否为空
 * 2.进行循环比较，如果优先级在其他两个元素优先级中间,则插入元素
 * 3.如果队列不为空 且进行循环比较后没有在中间插入，那么就放到队列的最后
 *
 * this.items.splice(index, 0);
 *    const arr = [1,23,17,8]
 *    arr.splice(2,0,99) //arr:[1, 23, 99, 17, 8]
 */

class PriorityQueue {
  constructor() {
    this.items = []
  }

  queueElement(element, priority) {
    return { element, priority }
  }

  enqueue(element, priority) {
    const qe = this.queueElement(element, priority)
    if (this.isEmpty()) {
      //1.判断队列是否为空
      this.items.push(qe)
    } else {
      let isAdd = false
      for (let index = 0; index < this.size(); index++) {
        //2.进行循环比较，然后在中间插入元素
        if (qe.priority < this.items[index].priority) {
          this.items.splice(index, 0, qe)
          isAdd = true
          break
        }
      }
      if (!isAdd) {
        //3.如果队列不为空 且进行循环比较后没有在中间插入，那么就放到队列的最后
        this.items.push(qe)
      }
    }
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
    let pqStr = ''
    for (const item of this.items) {
      pqStr += item.element + '-' + item.priority + ' '
    }
    return pqStr
  }
}

const myQueue = new PriorityQueue()
myQueue.enqueue('小d', 4)
myQueue.enqueue('小a', 1)
myQueue.enqueue('小e', 5)
myQueue.enqueue('小b', 2)
myQueue.enqueue('小c', 2) //小b和小c都是同样的优先级，小b先到，则小c在小b后面

console.log(myQueue.items)

console.log(myQueue.dequeue()) //{element: "小a", priority: 1}
console.log(myQueue.front()) //{element: "小b", priority: 2}    小a被出后最前的就是小b
console.log(myQueue.isEmpty()) //false   此时有四个元素
console.log(myQueue.size()) //4   四个元素的长度
console.log(myQueue.toString()) //'小b-2 小c-2 小d-4 小e-5 ' 四个元素转为字符串输出
