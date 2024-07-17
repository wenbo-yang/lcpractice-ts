xdescribe('leetcode 186: reverse words in a string', () => {
    // no extra memory
    // idea two pass first reverse the entire string
    // then revere each word
    function reverseWords(s: string[]): void {
        reverseHelper(s, 0, s.length - 1);

        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (s[r] === ' ') {
                // encountered a word
                reverseHelper(s, l, r - 1);
                l = r + 1;
            }

            r++;
        }

        reverseHelper(s, l, r - 1); // reached the end reverse the last
    }

    function reverseHelper(s: string[], startingIndex: number, endingIndex: number) {
        let l = startingIndex;
        let r = endingIndex;

        while (l < r) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            r--;
            l++;
        }
    }

    it('test case 1 Input: s = , target = 5, output 2 ', () => {
        const s = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
        reverseWords(s);
        expect(s).toEqual(['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e']);
    });
});
