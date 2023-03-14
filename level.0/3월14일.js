// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  var answer = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      answer = answer + i;
    }
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  var answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}

//우수한 풀이
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
