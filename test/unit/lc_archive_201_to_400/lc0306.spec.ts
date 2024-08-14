xdescribe('leetcode 306: additive number', () => {
    function isAdditiveNumber(num: string): boolean {
        // [1, 1, 3, 1, 4, 1, 2, 7]
        //  t  t,
        //

        // left (l1,l2), right (r1, r2), result (t1, t2)

        for (let i = 1; i < num.length; i++) {
            let left = num.slice(0, i);
            for (let j = i + 1; j < num.length; j++) {
                let right = num.slice(i + 1, j);
                let expectedResult = (Number(left) + Number(right)).toString();

                let remaining = num.slice(j + 1);
                if (isAdditiveNumberHelper(right, expectedResult, remaining)) {
                    return true;
                }
            }
        }

        return false;
    }

    function isAdditiveNumberHelper(right: string, expectedResult: string, remaining: string): boolean {
        if (expectedResult === remaining) {
            return true;
        }

        if (!remaining.startsWith(expectedResult)) {
            return false;
        }

        const newLeft = right;
        const newRight = expectedResult;
        const newExpectedResult = (Number(newLeft) + Number(newRight)).toString();
        const newRemaining = remaining.slice(newRight.length);

        return isAdditiveNumberHelper(newRight, newExpectedResult, newRemaining);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
