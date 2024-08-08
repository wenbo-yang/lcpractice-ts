xdescribe('leetcode 202: happy number', () => {
    function isHappy(n: number): boolean {
        if (n === 1) {
            return true;
        }

        const cache: Set<number> = new Set();

        let currentNumber: number = n;

        while (true) {
            const next = getNext(currentNumber);
            if (cache.has(next)) {
                currentNumber = next;
                break;
            }
            currentNumber = next;
            cache.add(next);
        }

        return currentNumber === 1;
    }

    function getNext(currentNumber: number): number {
        return currentNumber
            .toString()
            .split('')
            .map((num) => Number(num) * Number(num))
            .reduce((a, b) => a + b);
    }

    it('test case 1 Input: 2, output false ', () => {
        expect(isHappy(2)).toBeFalsy();
    });

    it('test case 2 Input: 19, output true ', () => {
        expect(isHappy(19)).toBeTruthy();
    });
});
