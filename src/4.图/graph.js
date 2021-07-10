/** 队列 1.3 */
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
/** ---------------------------------------------------------------- */

/**
 * WHITE: 表示没有被遍历过
 * GRAY: 遍历中的点
 * BLACK: 被遍历过的点
 */

const COLOR = {
  WHITE: 0,
  GRAY: 1,
  BLACK: 2
}

/**
 * 无向图
 * vertex: 顶点
 * edge: 边
 */

class Graph {
  constructor() {
    this.vertexes = []
    this.edges = new Map()
  }

  addVertex(ver) {
    this.vertexes.push(ver)
    this.edges.set(ver, [])
  }

  addEdge(ver1, ver2) {
    this.edges.get(ver1).push(ver2)
    this.edges.get(ver2).push(ver1)
  }

  toString() {
    let str = ''
    this.vertexes.map((item) => {
      str += `${item}: `
      this.edges.get(item).map((subItem) => {
        str += `${subItem} `
      })
      str += '\n'
    })
    return str
  }

  initColor() {
    const colors = {}
    this.vertexes.map((item) => {
      colors[item] = COLOR.WHITE
    })
    return colors
  }

  /**
   * 实现广度优先搜索 BFS
   * 1.初始化颜色
   * 2.创建队列
   * 3.将顶点加入到队列中
   * 4.循环队列中取出元素
   *   a.队列中取出一个顶点 并从队列中删除  const ver = queue.dequeue()
   *   b.获取顶点相连的另外顶点
   *   c.将颜色设置为灰色
   *   d.遍历所有list的顶点，并加入队列中
   * 5.访问顶点   handler(ver)
   * 6.将顶点设置为黑色
   */
  breadthFirstSearch(firstVer, handler) {
    const colors = this.initColor()

    const queue = new Queue()
    queue.enqueue(firstVer)

    while (!queue.isEmpty()) {
      const ver = queue.dequeue()

      const verLists = this.edges.get(ver)
      colors[ver] = COLOR.GRAY
      verLists.map((item) => {
        if (colors[item] === COLOR.WHITE) {
          colors[item] = COLOR.GRAY
          queue.enqueue(item)
        }
      })

      handler(ver)
      colors[ver] = COLOR.BLACK
    }
  }

  /**
   * 实现s深度优先搜索 DFS
   */
  depthFirstSearch(firstVer, handler) {
    const colors = this.initColor()
    this.dfsVisit(firstVer, colors, handler)
  }

  dfsVisit(ver, colors, handler) {
    colors[ver] = COLOR.GRAY
    handler(ver)

    const verLists = this.edges.get(ver)
    verLists.map((item) => {
      if (colors[item] === COLOR.WHITE) {
        colors[item] = COLOR.GRAY
        this.dfsVisit(item, colors, handler)
      }
    })

    colors[ver] = COLOR.BLACK
  }
}
