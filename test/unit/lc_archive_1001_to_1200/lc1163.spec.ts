xdescribe('leetcode 1163: last substring in lexicographical order', () => {
    function lastSubstring(s: string): string {
        // a b c d a d d c
        // 0 1 2 3 0 3 3 2

        // 3 30 303 3033 30332
        // 3 33 332
        // 3 32

        // b b b b a b b;
        // 2 2 2 2 1 2 2;


        // b b a b b;
        // 2 2 1 2 2;

        const length = s.length; 
        let startIndex = 0; 
        for (let currentIndex = 1, offset = 0; currentIndex + offset < length;) {
            if (s[startIndex + offset] === s[currentIndex + offset]) {
                offset++;
            } else if (s[startIndex + offset] < s[currentIndex + offset]) {
                startIndex = currentIndex;
                currentIndex++;
                offset = 0;  
            } else {
                currentIndex += offset + 1;
                offset = 0;  
            }
        }
        return s.slice(startIndex);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
