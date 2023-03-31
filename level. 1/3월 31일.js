//https://school.programmers.co.kr/learn/courses/30/lessons/86051#

function solution(numbers) {
    var answer = [1,2,3,4,5,6,7,8,9]
    return answer.filter(x => !numbers.includes(x)).reduce((a,b) =>a+b)
}

//우수한 풀이
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
    var x =s.split(" ");
    var y = 0
   for(i=0; i<x.length; i++){
       if(x[i] !== "Z"){
        y += Number(x[i])
        } else {
        y -= Number(x[i-1])
        }
   }
return y
}

//우수한 풀이
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
