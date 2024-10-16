xdescribe('leetcode 608: leaf root or inner nods', () => {
// SELECT
//     id,
//     CASE
//         WHEN t1.id = (SELECT id FROM tree  WHERE p_id IS NULL)
//           THEN 'Root'
//         WHEN t1.id IN (SELECT p_id FROM tree )
//           THEN 'Inner'
//         ELSE 'Leaf'
//     END AS Type
// FROM
//     tree t1
// ORDER BY t1.id;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
