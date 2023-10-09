# Write your MySQL query statement below
SELECT machine_id, 
       ROUND((SELECT AVG(timestamp) FROM Activity WHERE activity_type = 'end' AND machine_id = a.machine_id) 
        -
        (SELECT AVG(timestamp) FROM Activity WHERE activity_type = 'start' AND machine_id = a.machine_id)
       , 3) AS processing_time 
FROM Activity AS a
GROUP BY machine_id;