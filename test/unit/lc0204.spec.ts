xdescribe('leetcode 204: count primes', () => {
    function countPrimes(n: number): number {
        let ans = 0;
        const isPrime = new Array<boolean>(n + 1).fill(true);
        isPrime[0] = false;
        if (n > 0) {
            isPrime[1] = false;
        }

        for (let i = 2; i < n; ++i) {
            if (!isPrime[i]) {
                continue;
            }
            ans++;

            for (let j = 2 * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
        return ans;
    }

    it('test case 1 Input: n = 10  output 4 ', () => {});
});
