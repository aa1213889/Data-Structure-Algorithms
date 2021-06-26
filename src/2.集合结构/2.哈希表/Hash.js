/**
 * hashFunc(str, size)
 *  str 传入的字符    size 存放的位置
 * primeNumber 质数  37 31  43等 常用这些数来设计哈希函数
 *
 */

const primeNumber = 37
function hashFunc(str, size) {
  let hashCode = 0
  for (let i = 0; i < str.length; i++) {
    hashCode = primeNumber * hashCode + str.charCodeAt(i)
  }
  let index = hashCode % size
  return index
}
