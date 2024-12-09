xdescribe('leetcode 1090: largest value from labels', () => {
    function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
        let index = 0;
        const valueLabel = values.map(v => [v, labels[index++]]);
        const maxAllowedItems = Math.min(numWanted, new Set<number>(labels).size * useLimit);
        valueLabel.sort((a,b) => b[0] - a[0]); // sort desc;
        const useLimitMap = new Map<number, number>();

        let result = 0;
        let count = 0;

        for (const vl of valueLabel) {
            if (count === maxAllowedItems) {
                break;
            }

            const labelUsed = useLimitMap.get(vl[1]) || 0;

            if (labelUsed === useLimit) {
                continue;
            }

            result += vl[0];
            useLimitMap.set(vl[1], labelUsed + 1);
            count++;
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
