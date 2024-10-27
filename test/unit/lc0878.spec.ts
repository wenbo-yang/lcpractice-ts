xdescribe('leetcode 878: nth magical number', () => {
    function nthMagicalNumber(n: number, a: number, b: number): number {
        let l = 0;
        let r = (a + b) * n;
        const scd = smallestCommonDivisor(a, b);
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / scd) >= n)
                r = mid; // Too high, adjust the right boundary
            else
                l = mid + 1; // Too low, adjust the left boundary
        }

        return l;
    };

    function greatestCommonDinominator(a: number, b: number): number {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    function smallestCommonDivisor(a: number, b: number): number {
        return a * b / greatestCommonDinominator(a, b);
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
