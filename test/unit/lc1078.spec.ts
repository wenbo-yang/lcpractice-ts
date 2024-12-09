xdescribe('leetcode 1078: occurences after bigram', () => {
    function findOcurrences(text: string, first: string, second: string): string[] {
        const words = text.split(' ');
        const n = words.length;
        const ans: string[] = [];
        for (let i = 0; i < n - 2; i++) {
            if (words[i] === first && words[i + 1] === second) {
                ans.push(words[i + 2]);
            }
        }
        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
