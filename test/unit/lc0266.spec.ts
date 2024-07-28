xdescribe('leetcode 266: palidrome permutation', () => {
    function canFormPalidrome(s: string): boolean {
        let numberOfOddCount = 0;
        const countMap: any = {};
        for (const c of s) {
            countMap[c] = (countMap[c] || 0) + 1;
            if (countMap[c] % 2 === 0) {
                numberOfOddCount--;
            } else {
                numberOfOddCount++;
            }
        }

        return s.length % 2 === 0 ? numberOfOddCount === 0 : numberOfOddCount === 1;
    }

    it('test case 1 Input: code, output false', () => {
        expect(canFormPalidrome('code')).toBeFalsy();
    });

    it('test case 2 Input: aab, output true', () => {
        expect(canFormPalidrome('aab')).toBeTruthy();
    });

    it('test case 3 Input: carerac, output true', () => {
        expect(canFormPalidrome('carerac')).toBeTruthy();
    });
});
