//https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  return cipher
    .split("")
    .map((v, i) => ((i + 1) % code == 0 ? v : ""))
    .join("");
}

//school.programmers.co.kr/learn/courses/30/lessons/120845

https: function solution(box, n) {
  return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  var answer = { 2: "0", 0: "5", 5: "2" };
  return rsp
    .split("")
    .map((v) => answer[v])
    .join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .split("")
    .map((x) => (x >= 0 ? Number(x) : ""))
    .filter((v) => v !== "")
    .sort();
}

//더 간단한 답
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  var answer = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = 1; j < numbers.length; j++)
      if (numbers[i] !== numbers[j]) {
        answer.push(numbers[i] * numbers[j]);
      }
  }
  return answer.sort((a, b) => b - a)[0];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  var answer = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++)
      if (i !== j) {
        answer.push(numbers[i] * numbers[j]);
      }
  }
  return answer.sort((a, b) => b - a)[0];
}

//우수한 방법

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  var x = Array.from(my_string);
  x.splice(num1, 1, my_string[num2]);
  x.splice(num2, 1, my_string[num1]);
  return x.join("");
}

//우수한 풀이 구조 분해 할당
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  var z = [];
  array.map((x) =>
    x == Math.max.apply(null, array) ? z.push(x, array.indexOf(x)) : ""
  );
  return z;
}

//우수한 풀이

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
