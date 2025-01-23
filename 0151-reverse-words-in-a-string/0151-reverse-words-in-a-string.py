class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        words= s.split()
        reversed = words[::-1]
        res=' '.join(reversed)
        return res