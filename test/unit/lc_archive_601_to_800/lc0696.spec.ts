
xdescribe('leetcode 696: count binary substrings', () => {
    function countBinarySubstrings(s: string): number {
        // count 10s

        let count = 0;
        let index = 0;
        while (index < s.length - 1) {
            if (s[index] !== s[index + 1]) {
                let offset: number = 0;
                while (isTheSame(s, index, offset)) {
                    offset++;
                    count++;
                }

                index += offset;
            }
        }

        return count;
    };

    function isTheSame(s: string, index: number, offset: number) {
        return s[index] === s[index - offset] && s[index + 1] === s[index + 1 + offset];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


