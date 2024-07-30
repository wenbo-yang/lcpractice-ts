xdescribe('leetcode 290: word pattern', () => {
    function wordPattern(pattern: string, s: string): boolean {
        const map = new Map<string, number[]>();

        for (let i = 0; i < pattern.length; i++) {
            const indices = (map.get(pattern[i]) || []);
            indices.push(i);
            map.set(pattern[i],  indices);
        }
        const sArray = s.split(' ');
        for (let offset = 0; offset < sArray.length; offset++) {
            for(const entry of map.entries()) {
                if (!doestEntryMatchPattern(offset, entry, sArray)) {
                    return false;
                }
            }

            offset += pattern.length;
        }

        return true;
    };

    function doestEntryMatchPattern(offset: number, entry: [string, number[]], sArray: string[]) {
        const word = sArray[offset];

        for (const index of entry[1]) {
            if (sArray[index + offset] !== word) {
                return false;
            }
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



