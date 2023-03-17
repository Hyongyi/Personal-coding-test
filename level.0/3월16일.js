//https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  var answer = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  answer.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120822
function solution(my_string) {
  return my_string.split("").reverse().join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  var answer = [];
  answer.push(parseInt(money / 5500), money % 5500);
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120813/solution_groups?language=javascript

function solution(n) {
  var answer = [];
  for (i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}
