xdescribe('leetcode 597: friend requests', () => {
    // SELECT
    // ROUND(
    //     IFNULL(
    //         (
    //             SELECT COUNT(DISTINCT requester_id, accepter_id)
    //             FROM RequestAccepted
    //         ) / (SELECT COUNT(DISTINCT sender_id, send_to_id) FROM FriendRequest),
    //         0
    //     ),
    //     2
    // ) AS accept_rate;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
