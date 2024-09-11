xdescribe('leetcode 569: median salary', () => {
    // WITH
    //     t AS (
    //         SELECT
    //             *,
    //             ROW_NUMBER() OVER (
    //                 PARTITION BY company
    //                 ORDER BY salary ASC
    //             ) AS rk,
    //             COUNT(id) OVER (PARTITION BY company) AS n
    //         FROM Employee
    //     )
    // SELECT
    //     id,
    //     company,
    //     salary
    // FROM t
    // WHERE rk >= n / 2 AND rk <= n / 2 + 1;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
