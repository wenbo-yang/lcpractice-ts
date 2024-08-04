xdescribe('leetcode 339: nested list weighted sum', () => {
    function depthSum(nestedList: any): number {
        return dfs(nestedList, 1);
    }

    function dfs(nestedList: any, depth: number): number {
        let sum: number = 0;

        for(const item of nestedList) {
            if (typeof item === 'number') {
                sum += item * depth;
            }
            else {
                sum += dfs(item, depth + 1);
            }
        }

        return sum;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

