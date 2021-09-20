// Q1)
// 두 개의 자연수 a와 b를 입력한다.
// a/b 의 몫과 나머지를 반환한다.
// 음수는 고려하지 않는다.
// b가 0이면 올 메시지를 표시한다.

//입력 : a (피제수) , b (제수)
//출력 : [몫, 나머지]

const divide1 = (a, b) => {
  var q = 0; //몫
  var r = a; //나머지
  if (b == 0) {
    return null;
  }
  while (r >= b) {
    r = r - b;
    q = q + 1;
  }
  console.log(q);
  console.log(r);
  return [q, r];
};

divide1((a = 57), (b = 8));

// Q2)
// 두 개의 자연수 a와 b를 입력한다.
// a/b 의 값을 나머지를 구하지 않고 소수점 아래까지 계산한다.
// 나누어 떨어지지 않는 계산은 고려하지 않는다.
// 음수는 고려하지 않는다.
// b가 0이면 올 메시지를 표시한다.

//입력 : a (피제수) , b (제수)
//출력 : [몫의 정수 부분, 소수 부분, 소수 부분의 자릿수]

const divide2 = (a, b) => {
  var q = 0; //몫
  var r = a; //나머지
  if (b == 0) {
    return null;
  }
  while (r >= b) {
    r = r - b;
    q = q + 1;
  }
  var f = 0; //소수점 아래의 값
  var n = 0; //소수점 아래의 자릿수
  while (r > 0) {
    r = r * 10;
    f = f * 10;
    while (r >= b) {
      r = r - b;
      f = f + 1;
    }
    n = n + 1;
  }
  console.log([q, f, n]);
  return [q, f, n];
};

divide2((a = 57), (b = 8));
