xdescribe('leetcode 434: number of segments in a string', () => {
    function countSegments(s: string): number {
        let index = 0;
        let spaceCount = 0;
        while (index < s.length) {
            if (s[index] === ' ') {
                spaceCount++;
                while(index < s.length && s[index] === ' ') {
                    index++;
                } 
            }
            else {
                index++;
            }
        }

        return s[s.length - 1] === ' ' ? spaceCount : spaceCount + 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});