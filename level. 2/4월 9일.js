//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var x = s.split(" ").sort((a, b) => a - b);
  return x[0] + " " + x.at(-1);
}

//우수한 풀이
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
