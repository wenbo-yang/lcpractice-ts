xdescribe('leetcode 413: Arithmetic slices', () => {
    function numberOfArithmeticSlices(nums: number[]): number {
        const sumArrayMem = new Map<number, number[][]>();

        for (let i = 0; i < nums.length - 2; i++) {
            if ((nums[i] - nums[i - 1]) === (nums[i + 1] - nums[i + 2])) {
                const curr = sumArrayMem.get(3) || [];
                curr.push([i, i + 2]);
                sumArrayMem.set(3, curr);
            }
        }

        for (let l = 4; l <= nums.length; l++) {
            const prev = sumArrayMem.get(l - 1);

            if (prev && prev.length > 0) {
                for(const boundingIndices of prev) {
                    if (canExtend(nums, boundingIndices)) {
                        extend(sumArrayMem, boundingIndices, l);
                    }
                }
            }
            else {
                break;
            }
        }

        return sumArrayMem.size;
    };

    function canExtend(nums: number[], boundingIndices: number[]) {
        return boundingIndices[1] + 1 < nums.length && (nums[boundingIndices[1]] - nums[boundingIndices[1] - 1]) === (nums[boundingIndices[1] + 1] - nums[boundingIndices[1]])
    }

    function extend(sumArrayMem: Map<number, number[][]>, boundingIndices: number[], length: number): void {
        const map = sumArrayMem.get(length) || [];
        map.push([boundingIndices[0], boundingIndices[1] + 1]);
        sumArrayMem.set(length, map);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



