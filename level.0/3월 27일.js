//https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  return my_string
    .split("")
    .map((v) => v.toLowerCase())
    .sort()
    .join("");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  return my_string
    .split(/[a-zA-Z]/gi)
    .map((v) => (v !== "" ? Number(v) : 0))
    .reduce((a, b) => a + b);
}

//우수한 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  return eval(my_string);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120897
function solution(n) {
  var answer = [];
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  for (i = 1; i < 100; i++) {
    if ((6 * i) % n == 0) {
      return i;
    }
  }
}

// 우수한 답
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  var ans = "";
  var wer = 0;
  for (z = i; z <= j; z++) {
    ans += z;
  }
  for (y = 0; y < ans.length; y++) {
    if (ans[y] == k) {
      wer++;
    }
  }
  return wer;
}

//우수한 풀이
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120890
function solution(array, n) {
  var answer = [];
  array.sort();
  for (i of array) {
    i - n < 0 ? answer.push(n - i) : answer.push(i - n);
  }
  return array[answer.indexOf(Math.min(...answer))];
}

//우수한 풀이

function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  return (
    array
      .map((v) => v.toString())
      .reduce((a, b) => a + b)
      .split("7").length - 1
  );
}

//우수한 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript
function solution(my_string) {
  let a = "";
  let answer = new Set(my_string);

  for (let x of answer) {
    a += x;
  }

  return a;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  var answer = parseInt(bin1, 2) + parseInt(bin2, 2);
  return answer.toString(2);
}
