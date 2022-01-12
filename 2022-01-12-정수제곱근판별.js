// https://programmers.co.kr/learn/courses/30/lessons/12934
// 문제 : n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 아니면 -1을 리턴하시오.

function solution(n) {
  var x = Math.sqrt(n)
  return Number.isInteger(x) ? Math.pow(x + 1, 2) : -1
}

console.log(solution(121))
console.log(solution(3))
