xdescribe('leetcode 443: description', () => {
    function compress(chars: string[]): number {
        if (chars.length === 1) {
            return 1;
        }

        const resultArray: string[] = [];

        let l = 0; 
        let r = 0;
        let count = 0;

        let currentIndex = 0;
        while (r < chars.length) {
            if (chars[r++] === chars[l]){
                count++;
            }
            else {
                chars[currentIndex++] = chars[l];
                if ( count > 1) {
                    count.toString().split('').forEach(c => chars[currentIndex++] = c);
                }
                l = r;
                count = 0;
            }
        }

        return currentIndex + 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});