// sort함수의 리턴값이
// 음수면 a가 먼저옴
// 양수면 b가 먼저옴

var arr = [10, 3, 8, 4, 1]

function A() {
  return arr.sort((a, b) => a - b)
  // Step01) a=10, b=3 , a-b=7 , 리턴값>0 , b가 a앞으로 배치됨 , 따라서 arr=[3, 10, 8, 4, 1] 로 바뀜
  // Step02) a=10, b=8 , a-b=2 , 리턴값>0, b가 a앞으로 배치됨, 따라서 arr=[3, 8, 10, 4, 1] 로 바뀜
  // 마찬가지로 계속 비교...
}
function B() {
  return arr.sort((a, b) => b - a)
  // Step01) a=10, b=3 , b-a=-7 , 리턴값<0 , a가 b앞으로 배치됨 , 따라서 arr=[10, 3, 8, 4, 1] 로 바뀜
  // Step02) a=3, b=8 , b-a=5 , 리턴값>0, b가 a앞으로 배치됨, 따라서 arr=[10, 8, 3, 4, 1] 로 바뀜
  // 마찬가지로 계속 비교...
}

console.log(A())
console.log(B())
