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

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

function solution(a, b) {
  var aStr = a.toString();
  var bStr = b.toString();

  var sum1 = Number(aStr + bStr);
  var sum2 = Number(bStr + aStr);

  return sum1 > sum2 ? sum1 : sum2;
}

//더 간단한 답
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

//알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
//단, 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}
