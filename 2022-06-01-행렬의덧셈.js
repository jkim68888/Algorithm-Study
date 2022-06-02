// https://programmers.co.kr/learn/courses/30/lessons/12950
// 문제 : 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수를 만드시오.

function solution1(arr1, arr2) {
	var answer = [[]]
	for (var i = 0; i < arr1.length; i++) {
		answer[i] = []
		for (var j = 0; j < arr1[i].length; j++) {
			answer[i].push(arr1[i][j] + arr2[i][j])
		}
	}
	return answer
}

console.log(
	solution1(
		[
			[1, 2],
			[2, 3],
		],
		[
			[3, 4],
			[5, 6],
		]
	)
)
