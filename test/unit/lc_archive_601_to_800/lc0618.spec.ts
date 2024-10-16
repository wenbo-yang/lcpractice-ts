xdescribe('leetcode 618: student record by geography', () => {
// WITH
//     T AS (
//         SELECT
//             *,
//             ROW_NUMBER() OVER (
//                 PARTITION BY continent
//                 ORDER BY name
//             ) AS rk
//         FROM Student
//     )
// SELECT
//     MAX(IF(continent = 'America', name, NULL)) AS 'America',
//     MAX(IF(continent = 'Asia', name, NULL)) AS 'Asia',
//     MAX(IF(continent = 'Europe', name, NULL)) AS 'Europe'
// FROM T
// GROUP BY rk;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
