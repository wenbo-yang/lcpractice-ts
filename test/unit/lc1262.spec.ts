xdescribe('leetcode 1262: description', () => {
    function maxSumDivThree(nums: number[]): number {
        let smallestMod32 = Number.MAX_SAFE_INTEGER;
        let secondSmallestMod32 = Number.MAX_SAFE_INTEGER;
        let smallestMod31 = Number.MAX_SAFE_INTEGER;
        let secondSmallestMod31 = Number.MAX_SAFE_INTEGER;

        let sum = 0;

        for (const n of nums) {
            if (n % 3 === 2) {
                if  (n < smallestMod32) {
                    secondSmallestMod32 = smallestMod31;
                    smallestMod32 = n;
                }
                else if (n < secondSmallestMod32) {
                    secondSmallestMod32 = n;
                }
            }

            if (n % 3 === 1) {
                if (n < smallestMod31) {
                    secondSmallestMod31 = smallestMod31;
                    smallestMod31 = n;
                }
                else if ( n < secondSmallestMod31) {
                    secondSmallestMod31 = n;
                }
            }

            sum += n;
        }

        if (sum % 3 === 2) {
            if (smallestMod32 !== Number.MAX_SAFE_INTEGER) {
                if (secondSmallestMod31 !== Number.MAX_SAFE_INTEGER ) {
                    return Math.max(sum - smallestMod32, sum - smallestMod31 - secondSmallestMod31)
                }

                return sum - smallestMod32;
            }
            else {
                if (secondSmallestMod31 !== Number.MAX_SAFE_INTEGER) {
                    return sum - smallestMod31 - secondSmallestMod31
                }
            }

            return 0;    
        }

        if (sum % 3 === 2) {
            if (smallestMod31 !== Number.MAX_SAFE_INTEGER) {
                if (secondSmallestMod32 !== Number.MAX_SAFE_INTEGER ) {
                    return Math.max(sum - smallestMod31, sum - smallestMod32 - secondSmallestMod32)
                }

                return sum - smallestMod31;
            }
            else {
                if (secondSmallestMod32 !== Number.MAX_SAFE_INTEGER) {
                    return sum - smallestMod32 - secondSmallestMod32
                }
            }

            return 0;    
        }


        return sum;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
