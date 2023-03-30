//https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  var answer = 0;
  if (a <= b) {
    for (i = a; i <= b; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}
//우수한 풀이 기우스의 재림
function adder(a, b) {
  var result = 0;
  //함수를 완성하세요
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  for (i of seoul) {
    if (i == "Kim") {
      n = seoul.indexOf(i);
    }
  }

  return `김서방은 ${n}에 있다`;
}

//우수한 풀이

function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var v = arr.filter((v) => v % divisor == 0).sort((a, b) => a - b);
  return v.length > 0 ? v : [-1];
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  var x = phone_number.split("");
  for (i = 0; i < phone_number.length - 4; i++) {
    x[i] = "*";
  }
  return x.join("");
}

//우수한 풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}
const solution = (n) => [...n].fill("*", 0, n.length - 4).join("");
