xdescribe('leetcode 1147: longest chuncked palidrome decomposition', () => {
    function longestDecomposition(text: string): number {
        const textLength: number = text.length;
    
        if (textLength < 2) {
            return textLength;
        }
    
        for (let i: number = 1; i <= textLength >> 1; i++) {
            if (text.slice(0, i) === text.slice(textLength - i)) {
                return 2 + longestDecomposition(text.slice(i, textLength - i));
            }
        }
    
        return 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
