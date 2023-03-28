//https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M, N) {
    return M*N-1
}


////https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    return before.split("").sort().join("") == after.split("").sort().join("")
      ? 1
      : 0;
  }
  