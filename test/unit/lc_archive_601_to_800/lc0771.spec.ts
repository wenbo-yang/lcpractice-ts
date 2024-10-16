xdescribe('leetcode 771: jewels and stones', () => {
    function numJewelsInStones(jewels: string, stones: string): number {
        const set = new Set<string>(jewels.split(''));
        let count = 0;
        for (const s of stones) {
            if (set.has(s)) {
                count++;
            }
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
