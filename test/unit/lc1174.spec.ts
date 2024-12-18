xdescribe('leetcode 1174: immediate food delivery II', () => {
// SELECT
//     ROUND(AVG(order_date = customer_pref_delivery_date) * 100, 2) AS immediate_percentage
// FROM Delivery
// WHERE
//     (customer_id, order_date) IN (
//         SELECT customer_id, MIN(order_date)
//         FROM Delivery
//         GROUP BY 1
//     );


    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
