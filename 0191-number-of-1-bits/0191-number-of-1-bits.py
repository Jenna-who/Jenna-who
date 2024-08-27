class Solution(object):
    def hammingWeight(self, n):
        binary = bin(n)
        return binary.count("1")

