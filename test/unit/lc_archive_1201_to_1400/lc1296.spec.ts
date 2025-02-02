xdescribe('leetcode 1296: divid array in sets of k consecutive numbers', () => {
    function isPossibleDivide(nums: number[], k: number): boolean {
        if (nums.length === 0 || nums.length % k !== 0) {
            return false;
        }

        const numCount = new Map<number, number>();
        nums.forEach(n => numCount.set(n, (numCount.get(n) || 0) + 1));
        const min = Math.min(...Array.from(numCount.keys()));
        let l = min;
        while (numCount.size !== 0) {

            // current window 
            for (let i = l; i < l + k; i++) {
                if (numCount.get(i) === 0) {
                    return false;
                }
                else {
                    numCount.set(i, (numCount.get(i) || 1) - 1);
                }
            }

            for (let i = l; i < l + k; i++) {
                if (numCount.get(i)) {
                    l = i;
                    break;
                }
            }
        }

        return true;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
