// https://programmers.co.kr/learn/courses/30/lessons/12937
// 문제 : 정수 num 이 짝수면 "Even", 홀수면 "Odd" 를 반환

function solution1(num) {
  var answer = ''
  num % 2 === 0 ? (answer = 'Even') : (answer = 'Odd')
  return answer
}

console.log(solution1(3))
console.log(solution1(4))

//다른 풀이
function others1(num) {
  return num % 2 ? 'Odd' : 'Even' // 0은 false이다!
}
console.log(others1(3))
console.log(others1(4))

// https://programmers.co.kr/learn/courses/30/lessons/12940
// 문제 : 두수의 최대공약수와 최소공배수를 배열로 반환

// 최대공약수 : 유클리드 호제법
// 최소공배수 : 두수의 곱을 최대공약수로 나눔

function solution2(n, m) {
  const greatestCommonDivisor = (a, b) => {
    return b === 0 ? a : greatestCommonDivisor(b, a % b)
  }
  const leastCommonMultiple = (a, b) => (a * b) / greatestCommonDivisor(a, b)
  return [greatestCommonDivisor(n, m), leastCommonMultiple(n, m)]
}

console.log(solution2(3, 12)) // [3, 12]
console.log(solution2(2, 5)) // [1, 10]

// https://programmers.co.kr/learn/courses/30/lessons/12948
// 문제 : 문자열 핸드폰 번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 로 가린 문자열을 반환

function solution3(phone_number) {
  var star = ''
  for (var i = 0; i < phone_number.length - 4; i++) {
    star = star.concat('*')
  }
  return star + phone_number.substr(phone_number.length - 4, 4)
}

console.log(solution3('01033334444'))
console.log(solution3('027778888'))

// 다른 풀이

function others3(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4) // slice의 마이너스는 뒤에서부터 이동함
}

console.log(others3('01033334444'))
console.log(others3('027778888'))
