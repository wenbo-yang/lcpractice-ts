xdescribe('leetcode 647: description', () => {
    function countSubstrings(s: string): number {
        if (s.length < 2) {
            return s.length;
        }

        // cache starting index of that substring of length - 1
        const map: number[][] = new Array<number[]>(s.length).fill([]);
        
        // initial df
        for (let i = 0; i < s.length; i++) {
            map[0].push(i);

            if (s[i] === s[i + 1]) {
                map[1].push(i);
            }
        }

        for (let i = 2; i <= s.length; i++) {
            const prev = map[i - 2];
            const length = i - 2 + 1;
            
            for (const startingIndex of prev) {
                const endingIndex = startingIndex + length - 1;
                if (s[startingIndex - 1] === s[endingIndex + 1]) {
                    map[i].push(startingIndex - 1);
                }
            }

            if (map[i].length === 0 && map[i - 1].length === 0) {
                break;
            }
        }

        return map.map(m => m.length).reduce((a, b) => a + b);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
