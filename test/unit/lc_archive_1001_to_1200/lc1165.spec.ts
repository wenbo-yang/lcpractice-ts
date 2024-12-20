xdescribe('leetcode 1165: single row keyboard', () => {
    function calculateTime(keyboard: string, word: string): number {
        let i = 0;
        const map = new Map<string, number>(keyboard.split('').map(n => [n, i++]));
        let prevIndex = 0;
        let sum = 0;
        for (const c of word) {
            const index = map.get(c)!;
            sum += Math.abs(index - prevIndex);
            prevIndex = index;
        }

        return sum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
