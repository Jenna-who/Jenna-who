class Solution(object):
    def singleNonDuplicate(self, nums):
        num = 0;
        for i in nums :
            num = num^i

        return num    
        