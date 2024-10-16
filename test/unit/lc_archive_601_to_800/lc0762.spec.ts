xdescribe('leetcode 762: prime number set bits in binary', () => {
    function countPrimeSetBits(left: number, right: number): number {
        const primes = [2, 3, 5, 7, 11, 13,17,19];
        let ans = 0;
        for (let i = left; i <= right; ++i) {
            if (primes.includes((i.toString().split('').filter( c=> c=== '1')).length)) {
                ++ans;
            }
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
