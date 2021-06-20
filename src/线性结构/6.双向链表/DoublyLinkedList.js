/**
 * 注释1：insert
 * 例如有两节点a , c   a.next = c   c.prev = a
 *  插入节点b
 * c:curNode
 * a:curNode.prev
 * b:newNode
 */

/**
 * get()
 *  if (position > this.length / 2) 判断改node在链表前部分还是后部分
 * 从而判断前找还是后找
 */
class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  createNode(data) {
    return { data, prev: null, next: null }
  }

  append(data) {
    const newNode = this.createNode(data)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  insert(position, data) {
    if (position < 0 || position > this.length) return false
    const newNode = this.createNode(data)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position === this.length) {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        //注释1
        let curNode = this.head
        for (let index = 0; index < position; index++) {
          curNode = curNode.next
        }
        newNode.next = curNode
        newNode.prev = curNode.prev
        curNode.prev.next = newNode
        curNode.prev = newNode
      }
    }
    this.length++
  }

  get(position) {
    if (position < 0 || position >= this.length) return null
    let curNode = null
    if (position > this.length / 2) {
      curNode = this.tail
      for (let index = this.length - 1; index > position; index--) {
        curNode = curNode.prev
      }
    } else {
      curNode = this.head
      for (let index = 0; index < position; index++) {
        curNode = curNode.next
      }
    }
    return curNode.data
  }

  indexOf(data) {
    let [curNode, index] = [this.head, 0]
    while (curNode) {
      if (data === curNode.data) return index
      curNode = curNode.next
      index++
    }
    return -1
  }

  update(position, newData) {
    if (position < 0 || position >= this.length) return false
    let curNode = null
    if (position > this.length / 2) {
      curNode = this.tail
      for (let index = this.length - 1; index > position; index--) {
        curNode = curNode.prev
      }
    } else {
      curNode = this.head
      for (let index = 0; index < position; index++) {
        curNode = curNode.next
      }
    }
    curNode.data = newData
    return true
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return false
    let curNode = this.head
    if (this.length === 1) {
      curNode = null
      this.tail = null
    } else {
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        curNode = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        for (let index = 0; index < position; index++) {
          curNode = curNode.next
        }
        curNode.prev.next = curNode.next
        curNode.next.prev = curNode.prev
      }
    }
    this.length--
    return true
  }

  remove(data) {
    const position = this.indexOf(data)
    return this.removeAt(position)
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  toString() {
    return this.backwordString()
  }

  forwardString() {
    let [curNode, listStr] = [this.tail, '']
    while (curNode) {
      listStr += curNode.data + ' '
      curNode = curNode.prev
    }
    return listStr
  }

  backwordString() {
    let [curNode, listStr] = [this.head, '']
    while (curNode) {
      listStr += curNode.data + ' '
      curNode = curNode.next
    }
    return listStr
  }
}
