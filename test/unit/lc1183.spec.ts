xdescribe('leetcode 1183: max number of ones', () => {
    function maximumNumberOfOnes(width: number, height: number, sideLength: number, maxOnes: number) {
        let x = sideLength;
        const cnt: number[] = new Array<number>(x * x).fill(0);
        for (let i = 0; i < width; ++i) {
            for (let j = 0; j < height; ++j) {
                let k = (i % x) * x + (j % x);
                cnt[k]++;
            }
        }
        cnt.sort((a,b) => a - b);
        let ans = 0;
        for (let i = 0; i < maxOnes; ++i) {
            ans += cnt[cnt.length - i - 1];
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
