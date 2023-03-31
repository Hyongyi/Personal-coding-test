//https://school.programmers.co.kr/learn/courses/30/lessons/86051#

function solution(numbers) {
    var answer = [1,2,3,4,5,6,7,8,9]
    return answer.filter(x => !numbers.includes(x)).reduce((a,b) =>a+b)
}

//우수한 풀이
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
