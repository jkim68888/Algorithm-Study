// https://programmers.co.kr/learn/courses/30/lessons/12932
// 문제 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴하시오.

function solution(n) {
	var answer = []
	answer = n
		.toString()
		.split("")
		.reverse()
		.map((el) => Number(el))
	return answer
}
