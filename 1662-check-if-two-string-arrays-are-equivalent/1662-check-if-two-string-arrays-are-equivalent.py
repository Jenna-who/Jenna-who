class Solution(object):
    def arrayStringsAreEqual(self, word1, word2):
        """
        :type word1: List[str]
        :type word2: List[str]
        :rtype: bool
        """
        com1 = ''.join(word1)
        com2 = ''.join(word2)

        return com1 == com2
    