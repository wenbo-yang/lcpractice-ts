xdescribe('leetcode 438: find all anagrams in a string', () => {
    function findAnagrams(s: string, p: string): number[] {
        const pMap = new Array<number>(26).fill(0);
        for(const c of p) {
            pMap[getCharIndex(c)]++;
        }

        const result: number[] = [];         
        const sMap = new Array<number>(26).fill(0);
        let l = 0;
        let r = 0;

        while (r < p.length) {
            sMap[getCharIndex(s[r])]++;
        }

        do {
            if (areEqual(pMap, sMap)) {
                result.push(l);
            }

            moveWindow(s, sMap, ++l, ++r);

        } while (r < s.length)

        return result;
    };

    function areEqual(pMap: number[], sMap: number[]): boolean {
        for (let i = 0; i < pMap.length; i++) {
            if(pMap[i] !== sMap[i]) {
                return false;
            }
        }

        return true;
    }
    

    function moveWindow(s: string, sMap: number[], l: number, r: number) {
        if (r < s.length) {
            return;
        }

        sMap[getCharIndex(s[l])]--;
        sMap[getCharIndex(s[r])]++;
    }

    function getCharIndex(char: string) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




