xdescribe('leetcode 433: minimum generic mutation', () => {
    function minMutation(startGene: string, endGene: string, bank: string[]): number {
        const selectedIndices = new Set<number>()

        const result = minMutationHelper(startGene, endGene, bank, selectedIndices);

        return result;
    };

    function minMutationHelper(startGene: string, endGene: string, bank: string[], selectedIndices: Set<number>) {
        if (startGene === endGene) {
            return selectedIndices.size;
        }

        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < bank.length; i++) {
            if (!selectedIndices.has(i) && diffCount(startGene, bank[i]) === 1) {
                selectedIndices.add(i);
                const currMin = minMutationHelper(bank[i], endGene, bank, selectedIndices);
                min = Math.min(min, currMin);
                selectedIndices.delete(i);
            }
        }

        return min;
    }
    
    function diffCount(geneA: string, geneB: string): number {
        let count = 0;
        for (let i = 0; i < geneA.length; i++) {
            count += geneA[i] === geneB[i] ? 0 : 1; 
        }

        return count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

