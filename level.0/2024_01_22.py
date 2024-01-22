# 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

def solution(my_string, alp):
    return my_string.replace(alp, alp.upper())

# 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

# "w" : n이 1 커집니다.
# "s" : n이 1 작아집니다.
# "d" : n이 10 커집니다.
# "a" : n이 10 작아집니다.
# 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요


#map으로 control 을 순회하면서 get으로 해당 값을 받아와서 list 생성 =>ㄴ 그걸 sum하기
def solution(n, control):
    changes = {'w': 1, 's': -1, 'd': 10, 'a': -10}
    return n + sum(map(changes.get, control))


# 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

def solution(num_list):
    num_list.sort()
    return num_list[5:]