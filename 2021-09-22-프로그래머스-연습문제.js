//Q1) 문자열을 정수로 바꾸기
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
// 제한 조건
// 1. s의 길이는 1 이상 5이하입니다.
// 2. s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// 3. s는 부호와 숫자로만 이루어져있습니다.
// 4. s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "+1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function solution1(s) {
  var answer = 0;
  answer = parseInt(s);
  console.log(answer);
  return answer;
}

solution1("+1234");
solution1("-1234");

// Q2) 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 재한사항: s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력의 예 1
// 입력 : "abcde"
// 출력 : "c"
// 입출력의 예 2
// 입력 : "qwer"
// 출력 : "we"

function solution2(s) {
  var answer = "";
  s.length % 2 == 1
    ? (answer = s.substr(s.length / 2, 1))
    : (answer = s.substr(s.length / 2 - 1, 2));
  console.log(answer);
  return answer;
}

solution2("qwer");
solution2("abcde");
solution2("qwerfdse");
