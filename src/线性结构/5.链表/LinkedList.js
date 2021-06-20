/**
 * head: 指向第一个节点
 * length:链表长度
 */

/**
 * append()
 * while (curNode.next) 判断curNode.next是否为null 如果不是 就继续循环到下一个node
 * 当while循环结束后 说明就到了最后一个节点
 * curNode.next = newNode 将当前最后一个节点指向新建出的新节点
 */

/**
 * insert()
 * position < 0 || position > this.length
 * 插入node的位置不能小于0 也不能大于链表长度
 * position=0 插入到链表第一个位置
 *   newNode.next = this.head 当前的newNode 指向的是原先的第一个节点
 * position=length 插入到链表最后一个位置
 * position不是上面的两种情况的话就是插入中间
 * for (let index = 0; index < position; index++) 循环到position位置的节点
 * prevNode：要插入的前一个节点的内容
 * curNode：要插入的后一个节点的内容
 */

/**
 * get(position)
 * 获取对应位置的node
 */

/**
 * removeAt(position)
 * prevNode.next = curNode.next 当前node的前一个节点指向当前元素的后一个节点
 */
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  createNode(data) {
    return {
      data,
      next: null
    }
  }

  append(data) {
    const newNode = this.createNode(data)
    if (this.isEmpty()) {
      this.head = newNode
    } else {
      let curNode = this.head
      while (curNode.next) {
        curNode = curNode.next
      }
      curNode.next = newNode
    }
    this.length++
  }

  insert(position, data) {
    if (position < 0 || position > this.length) return false
    const newNode = this.createNode(data)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let [curNode, prevNode] = [this.head, null]
      for (let index = 0; index < position; index++) {
        prevNode = curNode
        curNode = curNode.next
      }
      newNode.next = curNode
      prevNode.next = newNode
    }
    this.length++
  }

  get(position) {
    if (position < 0 || position >= this.length) return null
    let curNode = this.head
    for (let index = 0; index < position; index++) {
      curNode = curNode.next
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
    let curNode = this.head
    for (let index = 0; index < position; index++) {
      curNode = curNode.next
    }
    curNode.data = newData
    return true
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return false
    if (position === 0) {
      this.head = this.head.next
    } else {
      let [curNode, prevNode] = [this.head, null]
      for (let index = 0; index < position; index++) {
        prevNode = curNode
        curNode = curNode.next
      }
      prevNode.next = curNode.next
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
    let [curNode, listStr] = [this.head, '']
    while (curNode) {
      listStr += curNode.data + ' '
      curNode = curNode.next
    }
    return listStr
  }
}
