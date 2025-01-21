class Solution(object):
    def divide(self, dividend, divisor):
        # If both are non-negative
        if dividend == -2**31 and divisor == -1:
            return 2**31 - 1 

        if dividend >= 0 and divisor > 0:
            return int(dividend / divisor)

        elif dividend < 0 and divisor < 0:
            return int((dividend) / (divisor))
        
        elif dividend < 0:
            return -int((-dividend) / divisor)
        
        else:
            return -int(dividend / (-divisor))

        