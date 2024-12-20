xdescribe('leetcode 1132: reported posts', () => {
// WITH
//     T AS (
//         SELECT
//             COUNT(DISTINCT t2.post_id) / COUNT(DISTINCT t1.post_id) * 100 AS percent
//         FROM
//             Actions AS t1
//             LEFT JOIN Removals AS t2 ON t1.post_id = t2.post_id
//         WHERE extra = 'spam'
//         GROUP BY action_date
//     )
// SELECT ROUND(AVG(percent), 2) AS average_daily_percent
// FROM T;    
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
