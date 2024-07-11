xdescribe('leetcode 15: 3Sum', () => {
    function threeSum(nums: number[]): number[][] {
        const distinctSet = new Set<string>();
        const seedValue = new Set<number>();
        const twoSumMap = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if (seedValue.has(nums[i])) {
                continue;
            } else {
                seedValue.add(nums[i]);
                const values = twoSum(nums, i, 0 - nums[i], twoSumMap);
                for (let j = 0; j < values.length; j++) {
                    values[j].push(nums[i]);
                    distinctSet.add(values[j].sort().toString());
                }
            }
        }

        const arrayStrings = Array.from(distinctSet);
        const retValues: number[][] = [];

        for (let i = 0; i < arrayStrings.length; i++) {
            retValues.push(arrayStrings[i].split(',').map((x) => Number(x)));
        }
        return retValues;
    }

    function twoSum(nums: number[], indexToAvoid: number, target: number, twoSumMap: Set<number>): number[][] {
        const retValues: number[][] = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === indexToAvoid) {
                continue;
            }
            if (twoSumMap.has(target - nums[i])) {
                retValues.push([nums[i], target - nums[i]]);
            } else {
                twoSumMap.add(nums[i]);
            }
        }

        return retValues;
    }

    it('test case 1 Input: nums = [0,0,0], Output: [[0,0,0]]', () => {
        const nums = [0, 0, 0];

        const output = threeSum(nums);

        console.log(output);

        expect(output).toEqual([[0, 0, 0]]);
    });
});
