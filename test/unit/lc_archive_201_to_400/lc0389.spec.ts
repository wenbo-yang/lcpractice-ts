xdescribe('leetcode 389: description', () => {
    function findTheDifference(s: string, t: string): string {
        const sMap: number[] = new Array<number>(26).fill(0);
        const tMap: number[] = new Array<number>(26).fill(0);
        let i = 0;
        for(i = 0; i < s.length; i++) {
            sMap[s[i].charCodeAt(0) - 'a'.charCodeAt[0]]++;
            tMap[t[i].charCodeAt(0) - 'a'.charCodeAt[0]]++;
        }

        tMap[t[i].charCodeAt(0) - 'a'.charCodeAt[0]]++;

        for (let j = 0; j < tMap.length; j++) {
            if (tMap[i] !== sMap[i]) {
                return String.fromCharCode(('a'.charCodeAt[0] + i))
            }
        }

        return ''
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});