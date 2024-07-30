xdescribe('leetcode 229: majority element using volting', () => {
    function majorityElement(nums: number[]): number[] {
        let n1 = 0;
        let c1 = 0;
        let n2 = 1;
        let c2 = 0;
        for (let num of nums) {
            if (num == n1) {
                ++c1;
            } else if (num == n2) {
                ++c2;
            } else if (c1 == 0) {
                n1 = num;
                c1 = 1;
            } else if (c2 == 0) {
                n2 = num;
                c2 = 1;
            } else {
                --c1;
                --c2;
            }
        }

        c1 = c2 = 0;
        for (let num of nums) {
            if (num == n1) ++c1;
            else if (num == n2) ++c2;
        }

        const c = nums.length / 3;
        const ans: number[] = [];
        if (c1 > c) ans.push(n1);
        if (c2 > c) ans.push(n2);
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
