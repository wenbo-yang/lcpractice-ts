xdescribe('leetcode 603: consecutive available seats', () => {
// WITH
//     T AS (
//         SELECT
//             *,
//             SUM(free = 1) OVER (
//                 ORDER BY seat_id
//                 ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
//             ) AS cnt
//         FROM Cinema
//     )
// SELECT seat_id
// FROM T
// WHERE free = 1 AND cnt > 1
// ORDER BY 1;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
