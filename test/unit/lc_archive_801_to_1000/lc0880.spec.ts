xdescribe('leetcode 880: decode string at index', () => {
    function decodeAtIndex(s: string, k: number): string {
        let decodedSize = 0;
        for (const char of s) {
            if (char >= '2' && char <= '9') {
                decodedSize *= Number(char);
            } else {
                decodedSize++;
            }
        }

        for (let i = s.length - 1; i >= 0; --i) {
            k %= Number(decodedSize);
          
            if (k === 0 && s[i] >= 'a' && s[i] <= 'z') {
                return s[i];
            }
          
            if (s[i] >= '2' && s[i] <= '9') {
                decodedSize /= Number(s[i]);
            } else {      
                --decodedSize;
            }
        }

        return '';

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


