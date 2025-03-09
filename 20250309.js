//정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  var answer = [];
  for (var i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

//정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  var answer = [];
  for (var i = start_num; i <= end_num; i++) {
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

//정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  return Number(n_str).toString();
}

//문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

function solution(arr) {
  return arr.join("");
}
