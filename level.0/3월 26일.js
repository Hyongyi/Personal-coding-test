//https://school.programmers.co.kr/learn/courses/30/lessons/120908

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return my_string
    .split("")
    .map((v) => (v.toUpperCase() == v ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}
