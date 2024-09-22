xdescribe('leetcode 646: find longest pair chain', () => {
    function findLongestChain(pairs: number[][]): number {
        const compare = (a: number[], b: number[]): number => {
            if (a[0] - b[0] > 0) {
                return 1;
            }

            if (a[0] - b[0] < 0) {
                return -1;
            }

            return a[1] - b[1];
        }

        pairs.sort(compare);

        const mem = new Map<number, number[][]>();
        const lengthMem = new Map<number, number>();
        let longest = 0;
        for (const pair of pairs) {
            longest = Math.max(longest, getLongestLength(pairs, [pair], mem, lengthMem));
        }
        
        return longest;
    }

    function getLongestLength(pairs: number[][], currentPairs: number[][], mem: Map<number, number[][]>, lengthMem: Map<number, number>): number {
        const end = currentPairs[currentPairs.length - 1][1];
        if(lengthMem.has(end)) {
            return lengthMem.get(end) || 0;
        }

        let set: number[][] = [];
        if (mem.has(end)) {
            set = mem.get(end) || [];
        }
        else {
            set = findNextSet(currentPairs, pairs);
        }
        
        if (set.length === 0) {
            return currentPairs.length;
        }

        let longest = 0;

        for (const pair of set) {
            currentPairs.push(pair);
            longest = Math.max(longest, getLongestLength(pairs, currentPairs, mem, lengthMem));
            currentPairs.pop();
        }

        lengthMem.set(end, longest);
        return longest;
    }

    function findNextSet(currentPairs: number[][], pairs: number[][]) {
        return binarySearch(currentPairs[currentPairs.length - 1][1], pairs);
    }

    function binarySearch(ending: number, pairs: number[][]) {
        return pairs.filter(p => p[0] > ending);
    }

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






