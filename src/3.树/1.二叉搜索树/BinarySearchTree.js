class BinarySearchTree {
  constructor() {
    this.root = null
  }
  createTreeNode(key) {
    return {
      key,
      left: null,
      right: null
    }
  }
  insert(key) {
    const newNode = this.createTreeNode(key)
    this.root === null ? (this.root = newNode) : this.insertNode(this.root, newNode)
  }

  insertNode(node, newNode) {
    if (newNode.key < this.root) {
      if (node.left === null) {
        //如果该节点的left是空的 就直接插入, 否则进行递归 查找该节点的下级节点是否满足
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      //大于等于的时候插右边.
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
}
