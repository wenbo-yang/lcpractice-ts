xdescribe('leetcode 1150: check if a number is majority element in a sorted array', () => {
    function isMajorityElement(nums: number[], target: number): boolean {
        let count = 0;

        const left = binarySearch(nums, target);
        const right = binarySearch(nums, target + 1);

        return (right - left) > nums.length / 2;
    }

    function binarySearch(nums: number[], target: number) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const pivot = Math.floor((l + r)/2);
            if (nums[pivot] >= target) { 
                r = pivot;
            }
            else {
                l = pivot + 1;
            }
        }

        return l;
    }
    

    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

