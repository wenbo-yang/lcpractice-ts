xdescribe('leetcode 578: description', () => {
// WITH
//     T AS (
//         SELECT
//             question_id AS survey_log,
//             (SUM(action = 'answer') OVER (PARTITION BY question_id)) / (
//                 SUM(action = 'show') OVER (PARTITION BY question_id)
//             ) AS ratio
//         FROM SurveyLog
//     )
// SELECT survey_log
// FROM T
// ORDER BY ratio DESC, 1
// LIMIT 1;
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
