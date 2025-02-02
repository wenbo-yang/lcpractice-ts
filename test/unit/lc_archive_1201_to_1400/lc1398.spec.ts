
xdescribe('leetcode 1398: customers who bought products A and B but not C', () => {
    // SELECT customer_id, customer_name
    // FROM
    //     Customers
    //     LEFT JOIN Orders USING (customer_id)
    // GROUP BY 1
    // HAVING SUM(product_name = 'A') > 0 AND SUM(product_name = 'B') > 0 AND SUM(product_name = 'C') = 0
    // ORDER BY 1;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
