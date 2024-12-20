xdescribe('leetcode 1142: user activity for the past 30 days', () => {
// WITH
//     T AS (
//         SELECT
//             COUNT(DISTINCT session_id) AS sessions
//         FROM Activity
//         WHERE activity_date <= '2019-07-27' AND DATEDIFF('2019-07-27', activity_date) < 30
//         GROUP BY user_id
//     )
// SELECT IFNULL(ROUND(AVG(sessions), 2), 0) AS average_sessions_per_user
// FROM T;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
