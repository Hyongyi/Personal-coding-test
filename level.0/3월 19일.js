//school.programmers.co.kr/learn/courses/30/lessons/120849

https: function solution(my_string) {
  return my_string.replace(/[aeiou]/gi, "");
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120841
function solution(dot) {
  if (dot[0] > 0) {
    if (dot[1] > 0) {
      return 1;
    } else {
      return 4;
    }
  } else if (dot[0] < 0)
    if (dot[1] > 0) {
      return 2;
    } else {
      return 3;
    }
}

//우수한 정답
//구조분해
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

//school.programmers.co.kr/learn/courses/30/lessons/120836
function solution(n) {
  var answer = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) answer++;
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120825
function solution(my_string, n) {
  var answer = "";
  for (i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}

//우수한 풀이
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120818
function solution(price) {
  return price >= 500000
    ? Math.floor(price * 0.8)
    : price >= 300000
    ? Math.floor(price * 0.9)
    : price >= 100000
    ? Math.floor(price * 0.95)
    : price;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120906
function solution(n) {
  var answer = n.toString().split("");
  var k = 0;
  for (i of answer) {
    k += Number(i);
  }
  return k;
}

//우수한 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  var answer=[];
  var x = 0;
  for(i = 0; i<quiz.length; i++){
   x= quiz[i].split("=");
  if(eval(x[0]) == Number(x[1])){
          answer.push("O")
          }else {
          answer.push("X")
          }
  }
return answer;
}

//우수한 풀이
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}