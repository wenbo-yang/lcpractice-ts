xdescribe('leetcode 1285: Find the Start and End Number of Continuous Ranges', () => {
// WITH
//     T AS (
//         SELECT
//             log_id,
//             SUM(delta) OVER (ORDER BY log_id) AS pid
//         FROM
//             (
//                 SELECT
//                     log_id,
//                     IF((log_id - LAG(log_id) OVER (ORDER BY log_id)) = 1, 0, 1) AS delta
//                 FROM Logs
//             ) AS t
//     )
// SELECT MIN(log_id) AS start_id, MAX(log_id) AS end_id
// FROM T
// GROUP BY pid;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
