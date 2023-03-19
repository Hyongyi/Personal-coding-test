//https://school.programmers.co.kr/learn/courses/30/lessons/120811#

function solution(array) {
  array.sort((a, b) => {
    return a - b;
  });
  return array[(array.length - 1) / 2];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript
function solution(s1, s2) {
  var answer = 0;
  for (i = 0; i < s1.length; i++) {
    for (j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        answer++;
      }
    }
  }
  return answer;
}

//우수한 풀이
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

//includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

s1 = [2, 3, 4, 5, 6, 7];
s2 = [3, 4, 8, 7, 8, 5, 6, 0];

function solution(s1, s2) {
  let intersection = s1.filter((x) => s2.includes(x));
  console.log(intersection);
}

console.log(solution(s1, s2));

//https://school.programmers.co.kr/learn/courses/30/lessons/120583/solution_groups?language=javascript
function solution(array, n) {
  return array.filter((x) => x == n).length;
}

function solution(num_list) {
  var answer = [];
  var n = 0;
  var k = 0;
  for (i of num_list) {
    if (i % 2 == 0) {
      n++;
    } else {
      k++;
    }
  }
  answer.push(n, k);
  return answer;
}

//우수한 답

function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120816
function solution(slice, n) {
  var answer = 0;
  if (n % slice > 0) {
    return parseInt(n / slice) + 1;
  } else {
    return parseInt(n / slice);
  }
}
