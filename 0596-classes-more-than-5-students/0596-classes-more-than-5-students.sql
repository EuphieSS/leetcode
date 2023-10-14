# Write your MySQL query statement below
SELECT a.class FROM (SELECT c.class, COUNT(c.class) AS count FROM Courses c GROUP BY c.class HAVING count >= 5) AS a;