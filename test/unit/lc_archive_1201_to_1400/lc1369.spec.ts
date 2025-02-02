xdescribe('leetcode 1369: get the second most recent activity', () => {
// SELECT
//     username,
//     activity,
//     startdate,
//     enddate
// FROM
//     (
//         SELECT
//             *,
//             RANK() OVER (
//                 PARTITION BY username
//                 ORDER BY startdate DESC
//             ) AS rk,
//             COUNT(username) OVER (PARTITION BY username) AS cnt
//         FROM UserActivity
//     ) AS a
// WHERE a.rk = 2 OR a.cnt = 1;


    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
