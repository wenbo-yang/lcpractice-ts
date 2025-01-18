xdescribe('leetcode 1322: ads performance', () => {
// SELECT
//   ad_id,
//   IFNULL(
//     ROUND(
//       SUM(action = 'Clicked') * 100 /(SUM(action = 'Clicked') + SUM(action = 'Viewed')),
//       2
//     ),
//     0
//   ) AS ctr
// FROM Ads
// GROUP BY 1
// ORDER BY ctr DESC, ad_id;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
