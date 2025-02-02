xdescribe('leetcode 1375: number of times binary string is prefix aligned', () => {
    function numTimesAllBlue(flips: number[]): number {
        let countAllBlue = 0;
        let maxSwitchedOn = 0;
        for (let i = 1; i <= flips.length; ++i) {
            maxSwitchedOn = Math.max(maxSwitchedOn, flips[i - 1]);
            if (maxSwitchedOn === i) {
                countAllBlue += 1;
            }
        }
        return countAllBlue;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
