xdescribe('leetcode 400: nth digit', () => {
    function findNthDigit(n: number): number {
        let map = new Map();

        map.set(1, [1, 9]);                      // 1 digit count nums, min, max
        map.set(2, [10, 99]);                    // 2 digit count nums, min, max
        map.set(3, [100, 999]);
        map.set(4, [1000, 9999]);
        map.set(5, [10000, 99999]);
        map.set(6, [100000, 999999]);
        map.set(7, [1000000, 9999999]);
        map.set(8, [10000000, 99999999]);
        map.set(9, [100000000, 999999999]);
        map.set(10, [1000000000, 9999999999]);   // 10 digit count nums, min, max      incl.s  2,147,483,647

        let totalDigitsSkipped = 0;
        for (let [digitCountOfNum, [min, max]] of map) {
            if (totalDigitsSkipped + (max - min + 1) * digitCountOfNum < n) {
                totalDigitsSkipped += (max - min + 1) * digitCountOfNum;
            } else {
                let digitDiff = n - totalDigitsSkipped;

                let numCountToSkip = Math.trunc(digitDiff / digitCountOfNum);
                if (numCountToSkip === Math.ceil(digitDiff / digitCountOfNum))
                    numCountToSkip--;

                let finalNum = min + numCountToSkip;
                totalDigitsSkipped += numCountToSkip * digitCountOfNum;
                let remainingDigits = n - totalDigitsSkipped;

                return +(finalNum + "")[remainingDigits - 1];
            }
        }

        return 0;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});