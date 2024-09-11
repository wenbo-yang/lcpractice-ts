xdescribe('leetcode 539: min time difference', () => {
    function findMinDifference(timePoints: string[]): number {
        timePoints.sort();
        timePoints.push(Number(timePoints[0].split(':')[0] + 24).toString() + ':' + timePoints[0].split(':')[0] + 24);
        const number = timePoints.map((t) => t.split(':').map((hm) => Number(hm)));

        let result = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i < number.length; i++) {
            const diff = getDiff(number[i], number[i - 1]);
            result = Math.min(diff, result);
        }

        return result;
    }

    function getDiff(bigger: number[], smaller: number[]): number {
        let carry: boolean = false;
        let diff = 0;
        if (bigger[1] < smaller[1]) {
            carry = true;
            diff = 60 + bigger[1] - smaller[1];
        }

        diff += 60 * (bigger[0] - (carry ? 1 : 0) - smaller[0]);

        return diff;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
