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
