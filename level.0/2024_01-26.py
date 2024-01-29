# 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

from math import prod
def solution(num_list):
    if(prod(num_list)> sum(num_list)**2):
        return 0
    else :
        return 1 
    
#문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

def solution(my_string, k):
    answer=""
    for i in range(k):
        answer += my_string
    return answer