xdescribe('leetcode 1300: sum of mutated array closest to target', () => {
    function findBestValue(arr: number[], target: number): number {
        arr.sort((a,b) => a - b);
        arr.unshift(0);
        let prefixSum: number[] = [];
        arr.forEach(n => prefixSum.push((prefixSum[prefixSum.length - 1] || 0) + n));
        
        let currentDiff = Math.abs(target - prefixSum[prefixSum.length - 1]);
        let currentValue = arr[arr.length - 1]
        for (let i = arr.length - 2; i >= 0; i--) {
            let l = arr[i];
            let r = arr[i + 1];

            const [diff, value] = findOptimalSolution(l, r, i, arr, prefixSum, target, currentDiff);
            if (diff > currentDiff) {
                return currentValue;
            }
            else {
                currentDiff = diff;
                currentValue = value;
            }
        }

        return currentValue
    };

    function findOptimalSolution(l: number, r: number, i: number, arr: number[], prefixSum: number[], target: number, currentDiff: number): [number, number] {
        // find a value that is greater equals l but less than  r
        let value = Math.floor((l + r) / 2);
        let diff = currentDiff;
        while (l < r) {
            const sum = prefixSum[i - 1] + (arr.length - i) * value;
            const diff = Math.abs(sum - target);
            if (currentDiff < diff) {
                l = value;
            }
            else {
                r = value - 1;
            }
        }

        return [diff, value];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

