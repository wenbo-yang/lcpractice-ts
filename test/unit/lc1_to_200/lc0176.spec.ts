xdescribe('leetcode num: description', () => {
    function func(): void {
        throw new Error('not implemented');
    }

    // CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
    // BEGIN
    //   RETURN QUERY (
    //     -- Write your PostgreSQL query statement below.

    //     select NULLIF(
    //     (select e.salary as SecondHighestSalary from Employee e
    //         order by e.salary desc
    //         limit 1
    //         offset n - 1), null) As getNthHighestSalary
    //     );
    // END;
    // $$ LANGUAGE plpgsql;

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
