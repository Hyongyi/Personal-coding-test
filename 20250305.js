//문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

function solution(myString) {
  let myStringArr = myString.split("");
  return myStringArr
    .map((a) => (a.toLowerCase() == "a" ? "A" : a.toLowerCase()))
    .join("");
}

//이런 방법이...

const solution = (s) => s.toLowerCase().replaceAll("a", "A");

//문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  return strArr.map((a, b) => (b % 2 == 0 ? a.toLowerCase() : a.toUpperCase()));
}

//정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((a, b) => a + b)
    : num_list.reduce((a, b) => a * b);
}
