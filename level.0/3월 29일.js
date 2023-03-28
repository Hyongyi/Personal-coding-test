//https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  var answer = [[]];
  var j = num_list.length / n;
  for (i = 0; i < j; i++) {
    answer[i] = num_list.splice(0, n);
  }
  return answer;
}

//비슷한 풀이
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
