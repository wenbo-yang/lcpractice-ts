xdescribe('leetcode 1107: new user daily count', () => {
// WITH
//     T AS (
//         SELECT
//             user_id,
//             MIN(activity_date) OVER (PARTITION BY user_id) AS login_date
//         FROM Traffic
//         WHERE activity = 'login'
//     )
// SELECT login_date, COUNT(DISTINCT user_id) AS user_count
// FROM T
// WHERE DATEDIFF('2019-06-30', login_date) <= 90
// GROUP BY 1;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
