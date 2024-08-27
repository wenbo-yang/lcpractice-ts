xdescribe('leetcode 503: next greater element II', () => {
    function nextGreaterElements(nums: number[]): number[] {
        let index = 0;
        const numberIndexArray = nums.map(n => [n, index++, 0]);
        numberIndexArray.sort((a, b) => b[0] - a[0]); // desc

        let l = 0;
        let r = 0;
        let nextGreaterNumber = -1;
        while (r < numberIndexArray.length) {
            if (numberIndexArray[r][0] === numberIndexArray[l][0]) {
                numberIndexArray[r][2] = nextGreaterNumber;
                r++;
            }
            else {
                nextGreaterNumber = numberIndexArray[l][0];
                l = r;
            }
        }

        return numberIndexArray.sort((a,b) => a[1] - b[1]).map( r => r[2]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
