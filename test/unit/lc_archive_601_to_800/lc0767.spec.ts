xdescribe('leetcode 767: reorganizing string', () => {
    function reorganizeString(s: string): string {
        let index = 0;
        const charCount: {char: string, count: number}[] = new Array(26).fill({char: '', count: 0}).map(r => {return {char: String.fromCharCode('a'.charCodeAt(0) + index++), count: 0}; });
        for (const c of s) {
            charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)].count++;
        }

        charCount.sort((a,b) => b.count - a.count);
       
        if (charCount[0].count > Math.floor(s.length / 2) + 1) {
            return '';
        }

        const result: string[] = [];

        let l = 0;
        let r = 1;
        for (let i = 0; i < s.length;) {
            while(charCount[l].count === 0) {
                l++;
                r++;
            }

            if (l < 26) {
                result.push(charCount[l].char);
                charCount[l].count--;
            }
            
            while (charCount[r].count === 0) {
                r++;
            }

            if (r < 26) {
                result.push(charCount[r].char);
                charCount[r].count--;
            }
            
            i += 2;
        }

        return result.join('');
    }
    
    // Helper function to replace a character at a specific index in a string
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
