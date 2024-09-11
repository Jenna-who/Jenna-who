class Solution(object):
    def heightChecker(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        exp = sorted(heights)
        output = 0

        for i in range(len(heights)):
            if heights[i] != exp[i]:
                output += 1

        return output          