
xdescribe('leetcode 1: two sum', () =>{
    function twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) {
                return [i,  map.get(target - nums[i]) || 0];
            }
            
            map.set(nums[i], i);
        }

        return [-1, -1]
    }

    it('test case 1 nums = [2,7,11,15], target = 9', () =>{
        const nums = [2,7,11,15];
        const target = 9;

        const indices = twoSum(nums, target);

        console.log(indices)

        expect(indices.includes(0)).toBeTruthy();
        expect(indices.includes(1)).toBeTruthy();
    });

    it('test case 2 nums = [3,2,4], target = 6', () =>{
        const nums = [3,2,4];
        const target = 6;

        const indices = twoSum(nums, target);

        console.log(indices)

        expect(indices.includes(1)).toBeTruthy();
        expect(indices.includes(2)).toBeTruthy();
    });

});