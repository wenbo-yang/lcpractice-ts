xdescribe('leetcode 1153: string transform into another string', () => {
    function canConvert(str1: string, str2: string): boolean {
        if (str1 === str2) {
            return true;
        }

        if (new Set<string>(str2.split('')).size === 26) {
            return false;
        }

        const charMap: Map<string, string> = new Map();

        for (const [index, char] of str1.split('').entries()) {
            if (!charMap.has(char)) {
                charMap.set(char, str2[index]);
            } else if (charMap.get(char) !== str2[index]) {
                return false;
            }
        }
    
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
