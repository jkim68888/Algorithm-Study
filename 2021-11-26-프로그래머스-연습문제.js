// 문제 : https://programmers.co.kr/learn/courses/30/lessons/12944

function solution1(arr) {
  var answer = 0;
  var sum = 0;

  for (var key in arr) {
    sum += arr[key];
  }
  answer = sum / arr.length;
  return answer;
}

console.log(solution1([5, 5]));
console.log(solution1([1, 2, 3, 4]));

// 다른 풀이

function solution(arr) {
  return (answer = arr.reduce((a, b) => a + b)) / arr.length;
}

console.log(solution([5, 5]));
console.log(solution([1, 2, 3, 4]));
