xdescribe('leetcode 1095: description', () => {
    class MountainArray {
         get(index: number): number {
            return 0;
         }
         length(): number {
            return 0;
         }
    }

    function findInMountainArray(target: number, mountainArr: MountainArray) {
        const arrayLength = mountainArr.length();

        let left = 0;
        let right = arrayLength - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (mountainArr.get(mid) > mountainArr.get(mid + 1)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        const peakIndex = left;
        const ascResult = binarySearch(0, peakIndex, 1, target, mountainArr);

        return ascResult === -1 ? binarySearch(peakIndex + 1, arrayLength - 1, -1, target, mountainArr) : ascResult;
    };

    const binarySearch = (start: number, end: number, direction: number, target: number, mountainArr: MountainArray): number => {
        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            const reversedMidValue = direction * mountainArr.get(mid);
            if (reversedMidValue >= direction * target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        return mountainArr.get(start) === target ? start : -1;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
