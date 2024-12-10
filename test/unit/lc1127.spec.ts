xdescribe('leetcode 1127: user purchase platform', () => {
// WITH
//     P AS (
//         SELECT DISTINCT spend_date, 'desktop' AS platform FROM Spending
//         UNION
//         SELECT DISTINCT spend_date, 'mobile' FROM Spending
//         UNION
//         SELECT DISTINCT spend_date, 'both' FROM Spending
//     ),
//     T AS (
//         SELECT
//             user_id,
//             spend_date,
//             SUM(amount) AS amount,
//             IF(COUNT(platform) = 1, platform, 'both') AS platform
//         FROM Spending
//         GROUP BY 1, 2
//     )
// SELECT
//     p.*,
//     IFNULL(SUM(amount), 0) AS total_amount,
//     COUNT(t.user_id) AS total_users
// FROM
//     P AS p
//     LEFT JOIN T AS t USING (spend_date, platform)
// GROUP BY 1, 2;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
