// Q1) 2016년
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
// 제한조건 : 2016년은 윤년입니다.

function solution1(a, b) {
  var answer = "";
  var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var howManyDays = 0;
  for (var i = 0; i < a - 1; i++) {
    howManyDays += month[i];
  }
  howManyDays += b - 1;
  answer = day[howManyDays % 7];
  console.log(answer);
  return answer;
}

solution1(5, 24);
solution1(1, 1);
solution1(1, 2);

// Q2) 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b의 대소관계는 정해져있지 않습니다.
// 예시: 3, 5 -> 12
//       3, 3 -> 3
//       5, 3 -> 12

function solution2(a, b) {
  var answer = 0;
  if (a <= b) {
    for (var i = a; i <= b; i++) {
      answer = answer + i;
    }
  }
  if (a > b) {
    for (var i = b; i <= a; i++) {
      answer = answer + i;
    }
  }
  console.log(answer);
  return answer;
}

solution2(3, 5);
solution2(3, 3);
solution2(5, 3);
