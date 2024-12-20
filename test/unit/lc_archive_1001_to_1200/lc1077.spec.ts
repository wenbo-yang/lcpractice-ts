xdescribe('leetcode 1077: project employee III', () => {
// WITH
//     T AS (
//         SELECT
//             *,
//             RANK() OVER (
//                 PARTITION BY project_id
//                 ORDER BY experience_years DESC
//             ) AS rk
//         FROM
//             Project
//             JOIN Employee USING (employee_id)
//     )
// SELECT project_id, employee_id
// FROM T
// WHERE rk = 1;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
