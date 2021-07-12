class ArrayList {
  constructor() {
    this.arr = []
  }
  insert(item) {
    this.arr.push(item)
  }
  toString() {
    return this.arr.join('-')
  }
}

/**
 * 冒泡排序
 *  第一次 两两比较 需要比较 arr.length - 1 次
 *  第一次 两两比较 需要比较 arr.length - 2 次
 */
const bubbleSort = (arr) => {
  const swap = (index1, index2) => {
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
  }

  for (let j = arr.length - 1; j >= 1; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1)
      }
    }
  }

  return arr
}

/** 选择排序 */
const selectionSort = (arr) => {
  const swap = (index1, index2) => {
    const tempItem = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tempItem
  }
  for (let j = 0; j < arr.length - 1; j++) {
    let min = j
    for (let i = min + 1; i <= arr.length - 1; i++) {
      if (arr[min] > arr[i]) {
        swap(min, i)
      }
    }
  }

  return arr
}

/** 插入排序 */
const insertionSort = (arr) => {
  for (let j = 1; j <= arr.length - 1; j++) {
    const temp = arr[j]
    let i = j
    while (arr[i - 1] > temp && i >= 1) {
      arr[i] = arr[i - 1]
      i--
    }
    arr[i] = temp
  }
  return arr
}

/** 希尔排序 */
function shellSort(arr) {
  let len = arr.length
  // gap 即为增量
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i
      let current = arr[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
  }
}

/** 快速排序 */
function quickSort(list) {
  if (list.length === 1 || list.length == 0) {
    return list
  }
  let index = Math.floor(list.length / 2)
  let currentItem = list.splice(index, 1)
  let leftList = [],
    rightList = []
  list.forEach((item) => {
    if (item <= currentItem) {
      leftList.push(item)
    } else {
      rightList.push(item)
    }
  })
  console.log([leftList, currentItem, rightList])
  return quickSort(leftList).concat(currentItem).concat(quickSort(rightList))
}
