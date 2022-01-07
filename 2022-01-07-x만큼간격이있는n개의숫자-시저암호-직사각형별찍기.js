// https://programmers.co.kr/learn/courses/30/lessons/12954
// 문제 : x부터 시작해서 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴하시오.

function solution1(x, n) {
  var answer = []
  for (var i = 0; i < n; i++) {
    answer.push(x + i * x)
  }
  return answer
}

console.log('2,5 : ', solution1(2, 5))
console.log('4,3 : ', solution1(4, 3))
console.log('-4,2 : ', solution1(-4, 2))

// https://programmers.co.kr/learn/courses/30/lessons/12926
// 문제 : 시저 암호 (문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식)
// 문자열 s와 거리 n을 입력받아 암호문을 리턴하시오.

function solution2(s, n) {
  var array = []
  for (var i = 0; i < s.length; i++) {
    var ascii = s.charCodeAt(i)
    var newAscii = ascii + n

    if (ascii === 32) {
      var newChar = ' '
    } else {
      if (ascii >= 65 && ascii <= 90) {
        if (newAscii >= 65 && newAscii <= 90) {
          var newChar = String.fromCharCode(newAscii)
        } else if (newAscii >= 91) {
          var newChar = String.fromCharCode(newAscii - 26)
        }
      } else if (ascii >= 97 && ascii <= 122) {
        if (newAscii >= 97 && newAscii <= 122) {
          var newChar = String.fromCharCode(newAscii)
        } else if (newAscii >= 122) {
          var newChar = String.fromCharCode(newAscii - 26)
        }
      }
    }

    array.push(newChar)
  }
  return array.join('')
}

console.log('AB, 1 : ', solution2('AB', 1))
console.log('z, 1 : ', solution2('z', 1))
console.log('a B z, 4 : ', solution2('a B z', 4))

// https://programmers.co.kr/learn/courses/30/lessons/12969
// 직사각형 별찍기

process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
  const n = data.split(' ')
  const a = Number(n[0]),
    b = Number(n[1])
  console.log(('*'.repeat(a) + '\n').repeat(b))
})

//다른 풀이
process.stdin.setEncoding('utf8')
//입력받은 숫자를 'data에 받는다'
process.stdin.on('data', (data) => {
  // data(입력받은 숫자)를 배열로 변경
  const n = data.split(' ')
  //a는 한줄에대한 별의 갯수, b는 몇줄 출력
  const a = Number(n[0]),
    b = Number(n[1])
  let result = ''
  for (var i = 0; i < b; i++) {
    for (var j = 0; j < a; j++) {
      result += '*'
    }
    result += '\n'
  }
  console.log(result)
})
