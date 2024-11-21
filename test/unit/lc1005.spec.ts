xdescribe('leetcode 1005: largest sum after k negation', () => {
    function largestSumAfterKNegations(nums: number[], k: number): number {
        const frequency: Map<number, number> = new Map();
  
        for (const number of nums) {
            frequency.set(number, (frequency.get(number) || 0) + 1);
        }
    
        for (let number = -100; number < 0 && k > 0; ++number) {
            if (frequency.get(number)! > 0) {
                const negations = Math.min(frequency.get(number) || 0, k);
                frequency.set(number, (frequency.get(number) || 0) - negations);
                frequency.set(-number, (frequency.get(-number) || 0) + negations);
                k -= negations;
            }
        }
    
        if ((k & 1) === 1 && (frequency.get(0) || 0) === 0) {
            for (let number = 1; number <= 100; ++number) {
                if (frequency.get(number)! > 0) {
                    frequency.set(number, (frequency.get(number) || 0) - 1);
                    frequency.set(-number, (frequency.get(-number) || 0) + 1);
                    break;
                }
            }
        }
    
        let totalSum = 0;
        for (const [num, freq] of frequency.entries()) {
            totalSum += num * freq;
        }
    
        return totalSum;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});