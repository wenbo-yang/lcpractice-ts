xdescribe('leetcode 602: who has the most friends', () => {
// WITH
//     T AS (
//         SELECT requester_id, accepter_id FROM RequestAccepted
//         UNION
//         SELECT accepter_id, requester_id FROM RequestAccepted
//     )
// SELECT requester_id AS id, COUNT(accepter_id) AS num
// FROM T
// GROUP BY 1
// ORDER BY 2 DESC
// LIMIT 1;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
