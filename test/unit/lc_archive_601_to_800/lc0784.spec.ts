xdescribe('leetcode 784: letter case permutation', () => {
    function letterCasePermutation(s: string): string[] {
        const map = new Map<number, number[][]>([[0, [[-1]]]]);
        const numberOfLetters = s.split('').filter(l => Number(l) === Number.NaN).length;
        
        const set = new Map<string, string>([['-1', s]]);
        for (let i = 1; i <= numberOfLetters; i++) {
            permuteAndAddToSet(i, map, s, set);
        }

        return Array.from(new Set<string>(set.values()));
    };

    function permuteAndAddToSet(level: number, map: Map<number, number[][]>, s: string, indicesStringMap: Map<string, string>) {
        const prev = map.get(level - 1) || [];

        if (prev.length === 0) {
            return;
        }

        const currLevel: number[][] = [];

        for (const indices of prev) {
            const startIndex = indices[indices.length - 1] + 1;

            for (let i = 0; i < s.length; i++) {
                if (i < startIndex || Number(s[i]) !== Number.NaN) {
                    continue;
                }
                else {
                    const toBePermuted = (indicesStringMap.get(indices.join()) || s).split('');
                    if (isLowerCase(toBePermuted[i])) {
                        toBePermuted[i] = toBePermuted[i].toUpperCase();
                    }
                    else {
                        toBePermuted[i] = toBePermuted[i].toLowerCase();
                    }

                    const key = Array.from(indices);
                    key.push(i);

                    indicesStringMap.set(key.join(), toBePermuted.join(''));
                    currLevel.push(key);
                }
            }
        }

        map.set(level, currLevel);
    }

    function isLowerCase(c: string) {
        return c === c.toLowerCase();
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





