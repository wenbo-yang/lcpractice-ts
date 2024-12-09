xdescribe('leetcode 1071: greatest common divisor of strings', () => {
    function gcdOfStrings(str1: string, str2: string): string {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length <= str2.length ? str1 : str2;
        let l = shorter.length;
        
        while(l > 0) {
            if (shorter.length % l === 0) {
                const dino = shorter.substring(0, l);
                if (isRepeatOf(shorter, dino) && isRepeatOf(longer, dino)) {
                    return dino;
                }
            }

            l--;
        }

        return '';
    };

    function isRepeatOf(div: string, dino: string) {
        const arr = div.split(dino);
        return arr.find(s => s.length > 0) !== undefined
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
