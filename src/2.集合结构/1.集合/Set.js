/**
 * const obj = {a: 1, b: 2}
 *  obj.hasOwnProperty('a') //true   hasOwn：是否有  Property：属性
 *  obj.hasOwnProperty('c') //false
 *  Object.keys(obj) //["a", "b"]
 */
class Set {
  constructor() {
    this.items = {}
  }
  add(value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  has(value) {
    return this.items.hasOwnProperty(value)
  }
  remove(value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  values() {
    return Object.keys(this.items)
  }

  //并集
  union(otherSet) {
    const unionSet = new Set() //1.新集合
    let setValues = this.values()
    for (let i = 0; i < setValues.length; i++) {
      //2.将原集合添加到新集合中
      unionSet.add(setValues[i])
    }

    //3.将otherSet添加到新集合中并判断是否有重复
    setValues = otherSet.values()
    for (let i = 0; i < setValues.length; i++) {
      unionSet.add(setValues[i])
    }
    return unionSet
  }

  //交集
  intersection(otherSet) {
    const intersection = new Set()
    let setValues = this.values()
    for (const item of setValues) {
      if (otherSet.has(item)) {
        intersection.add(item)
      }
    }
    return intersection
  }

  //差集
  difference(otherSet) {
    const differenceSet = new Set()
    let setValues = this.values()
    for (const item of setValues) {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    return differenceSet
  }

  //子集
  subSet(otherSet) {
    let setValues = this.values()
    for (const item of setValues) {
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true
  }
}
