    xdescribe('leetcode 282: expression add operator', () => {
    function addOperators(num: string, target: number): string[] {
        const current: string[] = [];
        const result: string[] = [];
        
        dfs(num, target, 0, '', 0, 0, result);

        return result;
    };

    function dfs(num: string, target: number, index: number, expression: string, prev: number, curr: number, result: string[]) {
        if (index === num.length) {
            if (curr === target) {
                result.push(expression);
            }

            return;
        }

        for (let i = 1; i < num.length; i++) {
            const left = num.slice(index, i);
            if (left[0] == '0' && left.length > 1) {
                break;
            }

            const leftNum = Number(left);

            if (!leftNum) break;

            if (index === 0) {
                dfs(num, target, i, left, leftNum, leftNum, result);
                continue;
            }

            dfs(num, target, index + i, expression + '+' + left, leftNum, curr + leftNum, result);
            dfs(num, target, index + i, expression + '-' + left, -leftNum, curr - leftNum, result);
            dfs(num, target, index + i, expression + '*' + left, prev * leftNum, curr - prev + prev * leftNum, result);
        }
    }
    

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



