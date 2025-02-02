xdescribe('leetcode 1241: number of comments per posts', () => {

// WITH
//     t AS (
//         SELECT DISTINCT s1.sub_id AS post_id, s2.sub_id AS sub_id
//         FROM
//             Submissions AS s1
//             LEFT JOIN Submissions AS s2 ON s1.sub_id = s2.parent_id
//         WHERE s1.parent_id IS NULL
//     )
// SELECT post_id, COUNT(sub_id) AS number_of_comments
// FROM t
// GROUP BY post_id
// ORDER BY post_id;
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
