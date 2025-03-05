//오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(todo_list, finished) {
  var answer = [];
  finished.forEach((a, b) => (a == false ? answer.push(todo_list[b]) : a));
  return answer;
}

//이런 정답도

function solution(todo_list, finished) {
  return todo_list.filter((e, i) => !finished[i]);
}

//최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

function solution(names) {
  return names.filter((a, b) => b % 5 == 0);
}

//정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(numbers, n) {
  var answer = 0;
  for (var i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) return answer;
  }
}

//정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return num_list.slice(n - 1, num_list.length);
}

//slice(2) 이렇게도 가능하므로 slice(n-1)가능
