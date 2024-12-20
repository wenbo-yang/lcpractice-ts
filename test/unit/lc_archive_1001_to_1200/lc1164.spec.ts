xdescribe('leetcode 1164: product price at a give date', () => {
// WITH
//     T AS (SELECT DISTINCT product_id FROM Products),
//     P AS (
//         SELECT product_id, new_price AS price
//         FROM Products
//         WHERE
//             (product_id, change_date) IN (
//                 SELECT product_id, MAX(change_date) AS change_date
//                 FROM Products
//                 WHERE change_date <= '2019-08-16'
//                 GROUP BY 1
//             )
//     )
// SELECT product_id, IFNULL(price, 10) AS price
// FROM
//     T
//     LEFT JOIN P USING (product_id);

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
