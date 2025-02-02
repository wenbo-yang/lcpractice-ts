xdescribe('leetcode 1390: four divisors', () => {
    function sumFourDivisors(nums: number[]): number {
        let result: number = 0;

        nums.forEach(n => {
            let factor = Math.sqrt(n);
            const set = new Set<number>();

            while ( factor < Math.sqrt(n)) {
                if (n % factor === 0) {
                    n = n / factor;
                    set.add(n);
                    set.add(factor);
                }
                factor++;
                
                if (set.size > 2) {
                    break;
                }
            }

            if (set.size === 2) {
                result += [1, n, ...Array.from(set.keys())].reduce((a,b) => a + b);
            }
        });


        return result;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
