xdescribe('leetcode 1084: sales analysis', () => {
// select Product.product_id, product_name
// from Product left join Sales
// on Product.product_id = Sales.product_id
// group by product_id
// having min(sale_date) >= '2019-01-01' and max(sale_date) <= '2019-03-31';

// --

// (
//     SELECT DISTINCT s.product_id, p.product_name
//     FROM Sales s LEFT JOIN Product p ON
//         s.product_id = p.product_id
//     WHERE s.sale_date >= '2019-01-01' AND
//           s.sale_date <= '2019-03-31'
// )
// EXCEPT -- MINUS if Oracle
// (
//     SELECT DISTINCT s.product_id, p.product_name
//     FROM Sales s LEFT JOIN Product p ON
//         s.product_id = p.product_id
//     WHERE s.sale_date < '2019-01-01' OR
//           s.sale_date > '2019-03-31'
// )

// --

// SELECT product_id, product_name
// FROM
//     Sales
//     JOIN Product USING (product_id)
// GROUP BY 1
// HAVING COUNT(1) = SUM(sale_date BETWEEN '2019-01-01' AND '2019-03-31');
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
