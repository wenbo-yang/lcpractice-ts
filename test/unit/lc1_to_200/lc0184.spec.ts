xdescribe('leetcode 184: department with highest salary', () => {
    function func(): void {
        throw new Error('not implemented');
    }

    // select d.name as department, e.name as employee, e.salary from employee e
    // join department d on d.id = e.departmentId
    // where (e.departmentid, salary) in (
    //     select et.departmentId, max(et.salary) from employee et group by et.departmentid
    // )

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
