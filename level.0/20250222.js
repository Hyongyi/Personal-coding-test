//'m'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

//문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

function solution(myString, pat) {
  var myStringarr = myString.split("");
  console.log(myStringarr);
  var filteredArr = myStringarr.map((a) => (a == "A" ? "B" : "A"));

  return filteredArr.join("").includes(pat) ? 1 : 0;
}
