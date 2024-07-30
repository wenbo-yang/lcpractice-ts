xdescribe('leetcode 57: insert interval', () => {
    function insert(intervals: number[][], newInterval: number[]): number[][] {
        let result: number[][] = [];

        if (newInterval[1] <= intervals[0][0]) {
            result.push(newInterval);
            result.push(intervals[0]);

            tryMerge(result);
            return result.concat(intervals.slice(1));
        }

        if (newInterval[0] >= intervals[intervals.length - 1][1]) {
            intervals.push(newInterval);
            tryMerge(intervals);
            return intervals;
        }

        const index = binarySearch(intervals, newInterval, 0, intervals.length - 1);

        for (let i = 0; i < intervals.length; i++) {
            if (i === index) {
                result.push(newInterval);
                tryMerge(result);
            }

            result.push(intervals[i]);
            tryMerge(result);
        }

        return result;
    }

    function tryMerge(result: number[][]) {
        if (result.length < 2) {
            return;
        }
        const end = result.length - 1;
        if (result[end][0] <= result[end - 1][1]) {
            result[end - 1][0] = Math.min(result[end - 1][0], result[end][0]);
            result[end - 1][1] = Math.max(result[end - 1][1], result[end][1]);

            result.pop();
        }
    }

    function binarySearch(intervals: number[][], newInterval: number[], left: number, right: number): number {
        if (left >= right) {
            return left;
        }
        const pivot = Math.floor((left + right) / 2);
        return newInterval[0] < intervals[pivot][0] ? binarySearch(intervals, newInterval, left, pivot) : binarySearch(intervals, newInterval, pivot + 1, right);
    }

    it('test case 1 Input: intervals = [[1,3],[6,9]] target = 5, output 2 ', () => {
        const intervals = [
            [1, 3],
            [6, 9],
        ];
        const newInterval = [2, 5];

        const result = insert(intervals, newInterval);

        expect(result).toEqual([
            [1, 5],
            [6, 9],
        ]);
    });
});
