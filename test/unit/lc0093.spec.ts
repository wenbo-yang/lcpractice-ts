describe('leetcode 93: valid ip addresses', () => {
    function restoreIpAddresses(s: string): string[] {
        const resultsSet: Set<string> = new Set();

        dfsHelper(s, 1, [], resultsSet);

        return Array.from(resultsSet);
    }

    function dfsHelper(s: string, startingIndex: number, dotIndices: number[], resultsSet: Set<string>) {
        if (dotIndices.length === 3) {
            const nums = [Number(s.substring(0, dotIndices[0])), Number(s.substring(dotIndices[0], dotIndices[1])), Number(s.substring(dotIndices[1], dotIndices[2])), Number(s.substring(dotIndices[2]))];
            for (const num of nums) {
                if (num > 255) {
                    return;
                }
            }

            return resultsSet.add(nums.map((n) => n.toString()).join('.'));
        }

        if (s.charAt(startingIndex) === '0' && canFormBasedOnLength(s, startingIndex + 1, dotIndices.length + 1)) {
            dotIndices.push(startingIndex + 1);
            dfsHelper(s, startingIndex + 1, dotIndices, resultsSet);
            dotIndices.pop();
            return;
        }

        for (let i = startingIndex; i < s.length - 1; i++) {
            if (canFormBasedOnLength(s, startingIndex, dotIndices.length)) {
                dotIndices.push(i + 1);
                dfsHelper(s, i + 1, dotIndices, resultsSet);
                dotIndices.pop();
            }
        }
    }

    function canFormBasedOnLength(s: string, startingIndex: number, dotIndicesLength: number) {
        return (3 - dotIndicesLength + 1) * 3 >= s.length - startingIndex;
    }

    it('test case 1 input 25525511135, output ["255.255.11.135","255.255.111.35"] ', () => {
        const results = restoreIpAddresses('25525511135');
        console.log(results);
        expect(results.length).toEqual(['255.255.11.135', '255.255.111.35']);
    });
});
