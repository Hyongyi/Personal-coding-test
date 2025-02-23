//양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
function solution(n) {
  var answer = 0;
  if (n % 2 !== 0) {
    for (var i = 0; i <= n; i++) {
      if (i % 2 !== 0) {
        answer += i;
      }
    }
  } else {
    for (var i = 0; i <= n; i++) {
      if (i % 2 == 0) {
        answer += i * i;
      }
    }
  }
  return answer;
}

// 더 좋은 답. for문을 사용하지 않는 등차수열

function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
