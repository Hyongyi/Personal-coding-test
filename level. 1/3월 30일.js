//https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer =0;
    if(a<=b) {  for(i=a; i<=b;       i++){
        answer +=i
    }
} else if (a>b){
    for(i=b; i<=a; i++){
         answer += i
    }
    }
    return answer
}
//우수한 풀이 기우스의 재림
function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b) * (Math.abs(a-b)+1) / 2;
}
