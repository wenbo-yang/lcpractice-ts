xdescribe('leetcode 1018: prefixes divs by 5', () => {
    function prefixesDivBy5(nums: number[]): boolean[] {
        const results: boolean[] = [];
        let currentPrefix = 0;
    
        for (const num of nums) {
            currentPrefix = ((currentPrefix << 1) | num) % 5;
            results.push(currentPrefix === 0);
        }
    
        return results;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
