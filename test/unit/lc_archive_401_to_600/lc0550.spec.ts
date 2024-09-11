// -- Write your PostgreSQL query statement below
// select
// round((select count(distinct a.player_id) from Activity a
// inner join
// (select player_id, min(event_date) as first_logged
//     from Activity
//     group by player_id) b on (DATE_PART('day', a.event_date::date) - DATE_PARt('day', b.first_logged::date)=1)
//     and a.player_id = b.player_id)
//     /
//     (select count(distinct player_id) from Activity),2) as fraction;

xdescribe('leetcode 550: gameplay analysis', () => {
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
