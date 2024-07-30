xdescribe('leetcode 30: substring with concatenation of all words', () => {
    function findSubstring(s: string, words: string[]): number[] {
        throw new Error('Not implemented');
        // brute force
    }

    it('test case 1 Input: s = "barfoothefoobarman", words = ["foo","bar"], output [0,9] ', () => {
        const result = findSubstring('barfoothefoobarman', ['foo', 'bar']);
        expect(result).toEqual([0, 9]);
    });
});
