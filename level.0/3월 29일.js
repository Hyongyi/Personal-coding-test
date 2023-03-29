//https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  var answer = [[]];
  var j = num_list.length / n;
  for (i = 0; i < j; i++) {
    answer[i] = num_list.splice(0, n);
  }
  return answer;
}

//비슷한 풀이
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  var answer = [];
  if (direction == "right") {
    answer.push(numbers.at(-1));
    for (i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  } else {
    for (i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }

  return answer;
}

// 좀 더 간단한 풀이
function solution(numbers, direction) {
  var answer = [];

  if ("right" == direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  answer = numbers;

  return answer;
}
//우수한 풀이

function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  y = num.toString().split("");
  new Set(y);
  for (i = 0; i < y.length; i++) {
    if (Number(y[i]) == k) {
      return i + 1;
    }
  }
  return -1;
}

//우수한 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120896
function solution(s) {
  var k = [];
  var x = s.split("");
  x.forEach((a, b) => {
    if (x.indexOf(a) == x.lastIndexOf(a)) {
      k.push(a);
    }
  });
  return k.sort().join("");
}

//우수한 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
