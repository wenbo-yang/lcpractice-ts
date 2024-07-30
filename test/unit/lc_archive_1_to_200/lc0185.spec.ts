xdescribe('leetcode num: description', () => {
    function func(): void {
        throw new Error('not implemented');
    }

    // SELECT d.name AS Department, e1.name AS employee, e1.salary
    // FROM employee e1
    //   INNER JOIN department d ON e1.departmentid = d.id
    // WHERE (SELECT count(DISTINCT e2.salary)
    //        FROM employee e2
    //        WHERE e1.departmentid = e2.departmentid
    //              AND e1.salary < e2.salary) < 3

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
