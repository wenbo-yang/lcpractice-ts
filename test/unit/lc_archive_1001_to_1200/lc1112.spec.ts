xdescribe('leetcode 1112: highest grade for each student', () => {
// WITH
//     T AS (
//         SELECT
//             *,
//             RANK() OVER (
//                 PARTITION BY student_id
//                 ORDER BY grade DESC, course_id
//             ) AS rk
//         FROM Enrollments
//     )
// SELECT student_id, course_id, grade
// FROM T
// WHERE rk = 1
// ORDER BY student_id;    
    
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
