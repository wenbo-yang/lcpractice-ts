xdescribe('leetcode 408: valid abbreviation', () => {
    function isValidAbbrev(s: string, abbr: string): boolean {
        
        let l = 0;
        let r = 0;

        while (l < s.length && r < abbr.length) {
            if (s[l] === abbr[r]){
                l++;
                r++;
                continue;
            }
            else {
                const numArray: string[] = [];
                while(isDigit(abbr[r])) {
                    numArray.push(abbr[r++])
                }

                const num = Number(numArray.join(''));
                l += num;
            }
        }

        return l === s.length && r === abbr.length;
    }

    function isDigit(char: string) {
        const testVal = char.charCodeAt(0) - '0'.charCodeAt(0)
        return testVal >=0 && testVal <= 9;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


