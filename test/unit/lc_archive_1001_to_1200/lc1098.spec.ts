xdescribe('leetcode 1098: unpopular book', () => {

// SELECT book_id, name
// FROM
//     Books
//     LEFT JOIN Orders USING (book_id)
// WHERE available_from < '2019-05-23'
// GROUP BY 1
// HAVING SUM(IF(dispatch_date >= '2018-06-23', quantity, 0)) < 10;

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
