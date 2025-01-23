# Write your MySQL query statement below
delete a1 from person a1, person a2
where a1.Email = a2.Email and a1.id>a2.id
