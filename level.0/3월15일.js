//https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
    var answer = [];
    for(i of strlist){
        answer.push(i.length)
    }
    return answer;
}


//우수한 풀이
function solution(strlist) {
    return strlist.map((el) => el.length)
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
    numbers.sort(function(a, b)  {
      return a - b;});
        return numbers.at(-1)*numbers.at(-2)
    }

//우수한 풀이
function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}

