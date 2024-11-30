xdescribe('leetcode 1056: confusing number', () => {
    function confusingNumber(n: number): boolean {
        const digitMap: (number | undefined)[] = [0, 1, undefined, undefined, undefined, undefined, 9, undefined, 8, 6];

        let originalNumber: number = n;
        let transformedNumber: number = 0;
    
        while (originalNumber > 0) {
            const digit: number = originalNumber % 10;
          
            if (digitMap[digit] === undefined) {
                return false;
            }
          
            transformedNumber = transformedNumber * 10 + digitMap[digit]!;
          
            originalNumber = Math.floor(originalNumber / 10);
        }
      
        return transformedNumber !== n;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
