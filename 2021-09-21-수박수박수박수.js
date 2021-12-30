//Q1) 수박수박수박수박수?
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// 제한조건 : n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// 입력 : 3
// 출력 : 수박수

function solution1(n) {
  var answer = "";
  var str = "";

  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) {
      str = "수";
    } else {
      str = "박";
    }
    answer += str;
  }
  console.log(answer);
  return answer;
}

solution1(10);
