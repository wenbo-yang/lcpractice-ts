xdescribe('leetcode 585: investments in 2016', () => {
//  WITH
//     InsuranceWithCounts AS (
//       SELECT
//         tiv_2016,
//         COUNT(*) OVER(PARTITION by tiv_2015) AS tiv_2015_count,
//         COUNT(*) OVER(PARTITION by lat, lon) AS city_count
//       FROM Insurance
//     )
//   SELECT SUM(tiv_2016) AS tiv_2016
//   FROM InsuranceWithCounts
//   WHERE tiv_2015_count > 1
//     AND city_count = 1;
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
