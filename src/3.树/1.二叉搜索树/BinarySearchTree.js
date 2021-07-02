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
    if (newNode.key < node.key) {
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

  /**
   * 先序遍历
   * previous + order + traversal
   * handler:回调函数
   */
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler)
  }
  preOrderTraversalNode(node, handler) {
    if (node !== null) {
      handler(node) //1.处理该节点

      /*2、3步骤 进栈出栈的过程 */
      this.preOrderTraversalNode(node.left, handler) //2.递归左子节点
      this.preOrderTraversalNode(node.right, handler) //3.递归右子节点
    }
  }

  /**
   * 中序遍历
   * middle + order + traversal
   */
  midOrderTraversal(handler) {
    this.midOrderTraversalNode(this.root, handler)
  }
  midOrderTraversalNode(node, handler) {
    if (node !== null) {
      this.midOrderTraversalNode(node.left, handler) //1.递归左子节点
      handler(node) //2.处理该节点
      this.midOrderTraversalNode(node.right, handler) //3.递归右子节点
    }
  }

  /**
   * 后序遍历
   * back + order + traversal
   */
  backOrderTraversal(handler) {
    this.backOrderTraversalNode(this.root, handler)
  }
  backOrderTraversalNode(node, handler) {
    if (node !== null) {
      this.backOrderTraversalNode(node.left, handler) //1.递归左子节点
      this.backOrderTraversalNode(node.right, handler) //2.递归右子节点
      handler(node) //3.处理该节点
    }
  }

  maxNode() {
    let [node, lastNode] = [this.root, null]
    while (node !== null) {
      lastNode = node
      node = node.right
    }
    return lastNode
  }

  minNode() {
    let [node, lastNode] = [this.root, null]
    while (node !== null) {
      lastNode = node
      node = node.left
    }
    return lastNode
  }

  search(key) {
    let node = this.root
    while (node !== null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  remove(key) {
    let currentNode = this.root,
      parentNode = null,
      isLeft = null //该节点在左边还是右边

    //1.寻找删除的子节点
    while (currentNode.key != key) {
      parentNode = currentNode
      if (key < currentNode.key) {
        isLeft = true
        currentNode = currentNode.left
      } else {
        isLeft = false
        currentNode = currentNode.right
      }
      if (currentNode === null) return false //如果没有该节点 返回false
    }

    //2.根据对应情况删除节点
    //2.1 删除的节点没有子节点
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode === this.root) {
        this.root = null
      } else if (isLeft) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    }
    //2.2 删除的节点有一个子节点
    else if (currentNode.right === null) {
      if (currentNode === this.root) {
        this.root = currentNode.left
      } else if (isLeft === true) {
        parentNode.left = currentNode.left
      } else {
        parentNode.right = currentNode.left
      }
    } else if (currentNode.left === null) {
      if (currentNode === this.root) {
        this.root = currentNode.right
      } else if (isLeft === true) {
        parentNode.left = currentNode.right
      } else {
        parentNode.right = currentNode.right
      }
    }

    //2.3 删除的节点有两个子节点
    else {
      const successorNode = this.getSuccssor(currentNode)
      if (currentNode === this.root) {
        this.root = successorNode
      } else if (isLeft) {
        parentNode.left = successorNode
      } else {
        parentNode.right = successorNode
      }
      successorNode.left = parentNode.left
    }
  }

  /**
   * 寻找节点的后继
   * 后继：比该节点大一点点的节点称为该节点的后继
   */
  getSuccssor(delNode) {
    let successorNode = delNode,
      currentNode = delNode,
      successorParntNode = delNode
    while (currentNode !== null) {
      successorParntNode = successorNode
      successorNode = currentNode
      currentNode = currentNode.left
    }
    if (successorNode != delNode.right) {
      successorParntNode.left = successorNode.right
      successorNode.right = delNode.right
    }
    return successorNode
  }
}
