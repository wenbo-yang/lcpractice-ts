xdescribe('leetcode 269: alien dictionary', () => {
    //   w
    // e
    //  r
    //   f
    //    t
    function alienDictionary(dict: string[]): string {
        const adjMap = new Map<string, Set<string>>();

        buildGraph(dict, adjMap);
        return '';
    }

    function buildGraph(dict: string[], adjMap: Map<string, Set<string>>) {
        for (const word of dict) {
            for (const c of word) {
                adjMap.set(c, new Set<string>()); // c to all its next
            }
        }

        // construct edges
        for (let i = 1; i < dict.length; i++) {
            const prev = dict[i - 1];
            const curr = dict[i];

            for (let j = 0; j < prev.length && j < curr.length; j++) {
                if (prev[j] != curr[j]) {
                    (adjMap.get(prev.charAt(j)) || new Set<string>()).add(curr.charAt(j));
                    break;
                }
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
