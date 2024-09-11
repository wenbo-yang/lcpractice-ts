xdescribe('leetcode 516: longest palidrome subsequence', () => {
    function longestPalindromeSubseq(s: string): number {
        // parlindromes of length 1
        // xx abc d ba yy
        // x
        // palidromes of length 2
        // x x
        // palidrome of lenghth 3
        // palidrome of 1 in middle of palidrome of length 2
        // palidrome of length 4
        // palidrome of length 2 in middle palindrome of length 2
        // palidrome of length 5 , 1 in middle of 4
        // palidrome of length 6, 2 in middle of 4
        // palidrome of length 7, 1 in middle of 6
        // ....

        const palindromeMap = new Map<number, { li: number; ri: number; lo: number; ro: number }[]>();
        let currentPalidromeLength = 2;
        initializePalindromeMap(s, palindromeMap);

        while (currentPalidromeLength < s.length) {
            if (buildNextPalidromes(s, currentPalidromeLength, palindromeMap)) {
                currentPalidromeLength++;
            }
        }

        return (palindromeMap.get(currentPalidromeLength) || []).length ? currentPalidromeLength : currentPalidromeLength - 1;
    }

    function initializePalindromeMap(s: string, palindromeMap: Map<number, { li: number; ri: number; lo: number; ro: number }[]>) {
        const palidromeArray: { li: number; ri: number; lo: number; ro: number }[] = [];
        for (let i = 0; i < s.length - 1; i++) {
            for (let j = 1; j < s.length; j++) {
                if (s[i] === s[j]) {
                    palidromeArray.push({ li: i, ri: j, lo: i, ro: j });
                }
            }
        }

        palindromeMap.set(2, palidromeArray);
    }

    function buildNextPalidromes(s: string, currentPalidromeLength: number, palindromeMap: Map<number, { li: number; ri: number; lo: number; ro: number }[]>) {
        const nextPalidromeArray: { li: number; ri: number; lo: number; ro: number }[] = [];

        if (currentPalidromeLength % 2 === 0) {
            const lastEvenPalidromeArray = palindromeMap.get(currentPalidromeLength) || [];
            for (const item of lastEvenPalidromeArray) {
                if (item.li < item.ri - 1) {
                    nextPalidromeArray.push({ li: item.li, ri: item.ri, lo: item.lo, ro: item.ro });
                    break;
                }
            }
        } else {
            const lastEvenPalidromeArray = palindromeMap.get(currentPalidromeLength - 1) || [];
            const palidromeArrayOfTwo = palindromeMap.get(2) || [];
            for (const item of lastEvenPalidromeArray) {
                for (const two of palidromeArrayOfTwo) {
                    if (item.li < two.li && item.ri > two.ri) {
                        nextPalidromeArray.push({ li: two.li, ri: two.ri, lo: item.lo, ro: item.ro });
                    }
                }
            }
        }

        palindromeMap.set(currentPalidromeLength + 1, nextPalidromeArray);

        return nextPalidromeArray.length > 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
