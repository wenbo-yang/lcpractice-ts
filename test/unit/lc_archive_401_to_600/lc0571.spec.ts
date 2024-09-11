xdescribe('leetcode 571: find median given frequency of numbers', () => {
// WITH
//     t AS (
//         SELECT
//             *,
//             SUM(frequency) OVER (ORDER BY num ASC) AS rk1,
//             SUM(frequency) OVER (ORDER BY num DESC) AS rk2,
//             SUM(frequency) OVER () AS s
//         FROM Numbers
//     )
// SELECT
// ROUND(AVG(num), 1) AS median
// FROM t
// WHERE rk1 >= s / 2 AND rk2 >= s / 2;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});