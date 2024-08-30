class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        stripped = s.strip()
        splitted = stripped.split()
        lastword = splitted[-1]
        return len(lastword)
        