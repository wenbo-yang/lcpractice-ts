xdescribe('leetcode 335: description', () => {
    function isSelfCrossing(distance: number[]): boolean {
        const vectors = [
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 0],
        ];

        const segments: number[][] = [[0, 0]];

        for (let i = 0; i < distance.length; i++) {
            const v = vectors[i % vectors.length];
            const offset = segments[i];
            const next = [v[0] * distance[i] + offset[0], v[1] * distance[i] + offset[1]];
            segments.push(next);

            if (i >= 3) {
                const testVec = [segments[i + 1], segments[i]];

                if (testTwoVectors(testVec, [segments[i - 3], segments[i - 2]]) || (i >= 5 && testTwoVectors(testVec, [segments[i - 5], segments[i - 4]]))) {
                    return true;
                }
            }
        }

        return false;
    }

    // [0,0], [0, 2], [-1, 1] [1,1]
    function testTwoVectors(testVec: number[][], crossVec: number[][]): boolean {
        const first = testVec[0][0] === testVec[1][0] ? [testVec[0][0], 0] : [0, testVec[0][1]];
        const second = crossVec[0][0] === crossVec[1][0] ? [crossVec[0][0], 0] : [0, crossVec[0][1]];

        // first vector x = 0;
        // second vector y = 1;
        const intersection = [first[0] + second[0], first[1] + second[1]];

        const firstBound = testVec[0][0] === testVec[1][0] ? intersection[1] <= Math.max(testVec[0][1], testVec[1][1]) && intersection[1] >= Math.min(testVec[0][1], testVec[1][1]) : intersection[0] <= Math.max(testVec[0][0], testVec[1][0]) && intersection[0] >= Math.min(testVec[0][0], testVec[1][0]);

        const secondBound = crossVec[0][0] === crossVec[1][0] ? intersection[1] <= Math.max(crossVec[0][1], crossVec[1][1]) && intersection[1] >= Math.min(crossVec[0][1], crossVec[1][1]) : intersection[0] <= Math.max(crossVec[0][0], crossVec[1][0]) && intersection[0] >= Math.min(crossVec[0][0], crossVec[1][0]);

        return firstBound && secondBound;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
