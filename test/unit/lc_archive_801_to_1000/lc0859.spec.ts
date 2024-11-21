xdescribe('leetcode 859: ', () => {
    function buddyStrings(s: string, goal: string): boolean {
        const count = new Array<number>(26).fill(0);
        const diff: number[] = [];
        for (let i = 0; i < s.length; i++) {
            count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            if (s[i] !== goal[i]) {
                diff.push(i);
            }
        }

        if (diff.length === 0 &&  count.findIndex(c => c >=2) !== -1) {
            return true;
        }

        return diff.length === 2 ? (s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]]): false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
