xdescribe('leetcode 1370: increasing decreasing string', () => {
    function sortString(s: string): string {
        let resultString: string = '';
        const charMap: Map<string, number> = new Map();
    
        for (let char of s) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
    
        const keys: string[] = Array.from(charMap.keys());
        keys.sort();
        while (resultString.length < s.length) {
            for (let key of keys) {
                if (charMap.get(key)! > 0) {
                    resultString += key;
                    charMap.set(key, charMap.get(key)! - 1);
                }
            }
    
            for (let i = keys.length - 1; i >= 0; i--) {
                if (charMap.get(keys[i])! > 0) {
                    resultString += keys[i];
                    charMap.set(keys[i], charMap.get(keys[i])! - 1);
                }
            }
        }
    
        return resultString;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
