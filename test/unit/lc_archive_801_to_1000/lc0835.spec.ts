xdescribe('leetcode 835: largest overlapping island', () => {
    function largestOverlap(img1: number[][], img2: number[][]): number {
        const size = img1.length;
        const overlapCount: Map<number, number> = new Map();
        let maxOverlap = 0;

        for (let row1 = 0; row1 < size; ++row1) {
            for (let col1 = 0; col1 < size; ++col1) {
                if (img1[row1][col1] === 1) {
                    for (let row2 = 0; row2 < size; ++row2) {
                        for (let col2 = 0; col2 < size; ++col2) {
                            if (img2[row2][col2] === 1) {
                                const translationKey = (row1 - row2) * 200 + (col1 - col2);

                                const currentCount = (overlapCount.get(translationKey) ?? 0) + 1;
                                overlapCount.set(translationKey, currentCount);

                                maxOverlap = Math.max(maxOverlap, currentCount);
                            }
                        }
                    }
                }
            }
        }

        // Return the maximum
        return maxOverlap;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
