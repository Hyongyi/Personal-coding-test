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

// https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  return num_list.reverse();
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120833

function solution(numbers, num1, num2) {
  var answer = [];
  for (i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}

// 우수한 풀이
//https://www.daleseo.com/js-array-slice-splice/참고
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

// > nums = Array(20).fill().map((_, i) => i)
// < [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// > nums.slice(5, 8)
// < [5, 6, 7]
// > nums.splice(5, 3)
// < [5, 6, 7]

//https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  if (n < 8) {
    return 1;
  } else if (n % 7 == 0) {
    return parseInt(n / 7);
  } else {
    return parseInt(n / 7) + 1;
  }
}

//우수한 풀이
function solution(n) {
  return Math.ceil(n / 7);
}
