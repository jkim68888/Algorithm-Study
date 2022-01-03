// https://programmers.co.kr/learn/courses/30/lessons/12933
// 문제 : 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴하시오.

function solution1(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  )
}

console.log(solution1(118372))

// https://programmers.co.kr/learn/courses/30/lessons/12935
// 문제 : 배열에서 가장 작은 수를 제거한 배열을 리턴하시오.

// 내풀이 *오답*
function solution2(arr) {
  var clonedArr = arr.slice() //깊은복사가 되지 않고 얕은복사가 발생하였기 때문에 오답처리 되었다.
  //js 에서 깊은복사 방법 : JSON.parse(JSON.stringify(arr))
  //string 으로 타입캐스팅 후 다시 객체로 바꾼다.
  var sortedNum = clonedArr.sort().shift()
  var newArray = arr.filter((el) => el !== sortedNum)
  return newArray.length ? newArray : [-1]
}

console.log(solution2([10]))
console.log(solution2([4, 3, 2, 1]))

// 다른 풀이
function solution3(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  return arr.length ? arr : [-1]
}
