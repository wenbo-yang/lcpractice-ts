xdescribe('leetcode 532: k diff pairs', () => {
    function findPairs(nums: number[], k: number): number {
        nums.sort((a,b) => a - b);
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            if(k === nums[i] - nums[i - 1]) {
                count++;
            }
        }

        return count;
    };

    function findPairsSet(nums: number[], k: number): number {
        const numberSet = new Set<number>();
        const pairSet = new Set<string>();
        let count = 0;
        for(const n of nums) {
            if (numberSet.has(n + k)) {
                if (!pairSet.has([n, n + k].join())) {
                    count++;
                }
                pairSet.add([n, n + k].join())
            }

            if (numberSet.has(n - k)) {
                if(!pairSet.has([n, n - k].join())) {
                    count++;
                }

                pairSet.add([n, n-k].join());
            }
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
