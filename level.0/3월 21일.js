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

  //https://school.programmers.co.kr/learn/courses/30/lessons/120909

  function solution(n) {
    return n%Math.sqrt(n) == 0 ? 1 : 2;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120851
function solution(my_string) {
  return my_string.trim().replace(/[^0-9]/g, "").split("").reduce((a,b) => Number(a)+Number(b));
}