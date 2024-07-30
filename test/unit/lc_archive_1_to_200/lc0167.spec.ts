xdescribe('leetcode 167: two sum sorted array', () => {
    function twoSum(numbers: number[], target: number): number[] {
        for (let i = 0; i < numbers.length; i++) {
            let l = i + 1;
            let r = numbers.length;
            let t = target - numbers[i];
            while (l < r) {
                let p = l + (r - l) / 2;
                if (numbers[p] === t) return [i + 1, p + 1];
                else if (numbers[p] < t) l = p + 1;
                else r = p;
            }
        }
        return [];
    }

    it('test case 1 Input: [2,7,11,15], target = 9, output [1, 2]', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });
});
