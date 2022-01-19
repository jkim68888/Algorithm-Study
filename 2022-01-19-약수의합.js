// https://programmers.co.kr/learn/courses/30/lessons/12928
// 문제 : 입력받은 정수 n의 약수를 모두 더한 값을 리턴하시오

function solution1(n) {
  var arr = []

  if (n !== 0) {
    for (var i = 1; i <= n; i++) {
      if (n % i === 0) {
        arr.push(n / i)
      }
    }
  } else {
    arr = [0]
  }

  // reduce() 메서드는 배열의 각 요소에 대해 주어진 콜백함수를 실행하고, 하나의 결과값을 반환합니다.
  // callback : (previousValue, currentValue) => 실행할 연산 코드
  return arr.reduce((a, b) => a + b)
}

console.log(solution1(0))
console.log(solution1(5))

// 다른 풀이1
function others1(n) {
  var arr = []

  for (var i = 1; i <= n; i++) {
    // 0 % 1 의 값은 0이다.
    if (n % i === 0) {
      // 배열에 i를 넣어주면 굳이 n이 0일때를 체크 안해줘도 된다.
      arr.push(i)
    }
  }

  return arr.reduce((a, b) => a + b)
}

// 다른 풀이2
function others2(n) {
  var result = 0

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      // i를 굳이 배열에 안넣고 위에 선언해준 변수에 누적해주면 된다.
      result = result + i
    }
  }

  return result
}

console.log(others2(0))
console.log(others2(28))
console.log(others2(6))
