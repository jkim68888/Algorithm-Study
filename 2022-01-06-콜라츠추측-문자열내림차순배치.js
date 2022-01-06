// https://programmers.co.kr/learn/courses/30/lessons/12943
// 문제 : 콜라츠 추측 (짝수면 2로 나눔, 홀수면 3을 곱하고 1을 더함 => 계속 반복하면 1이 된다.)
// 몇번 반복해야하는지 반환하는 함수를 만들어라.
// 500번 반복해도 1이 안되면 -1을 반환하시오

function solution1(num) {
  var cnt = 0
  while (num !== 1) {
    if (num % 2) {
      num = num * 3 + 1
    } else {
      num = num / 2
    }
    cnt++
  }

  return cnt >= 500 ? -1 : cnt
}

console.log('6: ', solution1(6))
console.log('16: ', solution1(16))
console.log('626331: ', solution1(626331))

// 다른 풀이
function other1(num) {
  var cnt = 0
  while (num !== 1 && cnt !== 500) {
    if (num % 2) {
      num = num * 3 + 1
    } else {
      num = num / 2
    }
    cnt++
  }

  return num === 1 ? cnt : -1
}

// https://programmers.co.kr/learn/courses/30/lessons/12917
// 문제 : 문자열의 문자를 내림차순으로 정렬하여 새로운 문자열을 리턴하시오.
// 대문자는 소문자보다 작은것으로 간주한다.

function solution2(s) {
  return s.split('').sort().reverse().join('')
}

console.log(solution2('Zbcdefg'))
