xdescribe('leetcode 986: interval list intersections', () => {
    function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
        const firstLength = firstList.length; 
        const secondLength = secondList.length; 
        const intersections: number[][] = []; 

        let firstIndex = 0;
        let secondIndex = 0;

        while (firstIndex < firstLength && secondIndex < secondLength) {
            const start = Math.max(firstList[firstIndex][0], secondList[secondIndex][0]);
            const end = Math.min(firstList[firstIndex][1], secondList[secondIndex][1]);

            if (start <= end) {
                intersections.push([start, end]);
            }

            if (firstList[firstIndex][1] < secondList[secondIndex][1]) {
                firstIndex++;
            } else {
                secondIndex++;
            }
        }

        return intersections;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
