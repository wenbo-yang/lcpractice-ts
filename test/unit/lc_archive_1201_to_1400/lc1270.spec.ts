xdescribe('leetcode 1270: all people report to given manager', () => {
// # Write your MySQL query statement below

// select a.employee_id as EMPLOYEE_ID
// from
//     Employees as a
//     left join
//     Employees as b on a.manager_id = b.employee_id
//     left join
//     Employees as c on b.manager_id = c.employee_id
//     left join
//     Employees as d on c.manager_id = d.employee_id
// where
//     a.employee_id != 1
//     and
//     d.employee_id = 1;

// --

// SELECT e1.employee_id
// FROM
//     Employees AS e1
//     JOIN Employees AS e2 ON e1.manager_id = e2.employee_id
//     JOIN Employees AS e3 ON e2.manager_id = e3.employee_id
// WHERE e1.employee_id != 1 AND e3.manager_id = 1;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
