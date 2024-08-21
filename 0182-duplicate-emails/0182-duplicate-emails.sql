# Write your MySQL query statement below
# Write your MySQL query statement below

SELECT email
FROM Person
GROUP BY Email
Having count(email)>1