//정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  var answer = [];
  for (var i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

//정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(n, k) {
  var answer = [];
  for (var i = 1; i <= n; i++) {
    if (i % k == 0) {
      answer.push(i);
    }
  }
  return answer;
}
