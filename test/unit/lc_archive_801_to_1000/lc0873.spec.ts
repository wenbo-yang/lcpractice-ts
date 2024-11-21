xdescribe('leetcode 873: length of longest fib sequence', () => {
    function lenLongestFibSubseq(arr: number[]): number {
        const fibTripplets: number[] = [];

        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i-1]+ arr[i] === arr[i+1]) {
                fibTripplets.push(i);
            }
        }

        let r = 0;
        let l = 0;
        let max = fibTripplets.length ? 3 : 0;
        while (r < fibTripplets.length) {
            if (fibTripplets[r] - 1 === fibTripplets[r - 1]) {
                max = Math.max(max, r - l + 3);
            }
            else {
                l = r;
            }
            r++;
        }

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
