// https://programmers.co.kr/learn/courses/30/lessons/12947
// 자연수 x 가 하샤드 수 인지 아닌지 검사하는 함수를 만들어라.
// 예시) 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

function solution1(x) {
  var sum = 0
  var newX = x.toString()
  for (var i = 0; i < newX.length; i++) {
    // substr(start, length) // substring(start, end)
    var str = newX.substr(i, 1)
    sum += Number(str)
  }
  // for (var i in newX.length) { } // 포인문은 배열, object 일때 사용
  return x % sum ? false : true
}

console.log('10은 하샤드수?', solution1(1))
console.log('12은 하샤드수?', solution1(2))
console.log('11은 하샤드수?', solution1(100))
console.log('13은 하샤드수?', solution1(313))
