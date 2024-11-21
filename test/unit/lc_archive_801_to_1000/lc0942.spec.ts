xdescribe('leetcode 942: di string match', () => {
    function diStringMatch(s: string): number[] {
        let max = s.length;
        let min = 0;

        const result: number[] = [];
        
        for (const c of s) {
            if (c === 'I') {
                result.push(min);
                min++;
            }
            else {
                result.push(max);
                max--;
            }
        }

        result.push(max);

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
