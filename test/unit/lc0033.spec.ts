xdescribe('leetcode 33: search in rotated sorted array', () => {
    function search(nums: number[], target: number): number {
        if (nums.length === 0) {
            return -1;
        }

        if (nums.length === 1) {
            return nums[0] === target ? 0 : -1;
        }

        const pivot = findPivot(nums, 0, nums.length - 1);
        console.log(pivot);

        if (pivot >= 0 && target >= nums[0] && target <= nums[pivot]) {
            return binarySearch(nums, 0, pivot, target);
        }

        if (nums[pivot + 1] <= target && nums[nums.length - 1] >= target) {
            return binarySearch(nums, pivot + 1, nums.length - 1, target);
        }

        return -1;
    }

    function findPivot(nums: number[], l: number, r: number): number {
        if (l > r) {
            return -1;
        }

        if (l === r) {
            return l < nums.length - 1 && nums[l] > nums[l + 1] ? l : -1;
        }

        let pivot = Math.floor((l + r) / 2);

        if (pivot < nums.length - 1 && nums[pivot] > nums[pivot + 1]) {
            return pivot;
        }

        if (nums[pivot] < nums[r]) {
            return findPivot(nums, l, pivot);
        } else {
            return findPivot(nums, pivot + 1, r);
        }
    }

    function binarySearch(nums: number[], l: number, r: number, target: number): number {
        // console.log('here ' + l + ' ' + r);
        if (l > r) {
            return -1;
        }

        if (l === r) {
            return nums[l] === target ? l : -1;
        }

        const mid = Math.floor((r + l) / 2);

        // console.log('here ' + l + ' ' + r + ' ' + mid + ' ' + nums[mid]);

        if (nums[mid] >= target) {
            return binarySearch(nums, l, mid, target);
        } else {
            return binarySearch(nums, mid + 1, r, target);
        }
    }

    it('test case 1 Input: nums = [4,5,6,7,0,1,2], target 0, output 4', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        const result = search(nums, 0);

        expect(result).toEqual(4);
    });

    it('test case 2 Input: nums = [4,5,6,7,0,1,2], target, 0, output 4', () => {
        const nums = [7, 0, 1, 2, 3, 4, 5];
        const result = search(nums, 0);

        expect(result).toEqual(1);
    });

    it('test case 3 Input: nums = [1, 3], target 0, output -1', () => {
        const nums = [1, 3];
        const result = search(nums, 0);

        expect(result).toEqual(-1);
    });

    it('test case 4 Input: nums = [1, 3], target 2, output -1', () => {
        const nums = [1, 3];
        const result = search(nums, 2);

        expect(result).toEqual(-1);
    });

    it('test case 5 Input: nums = [1, 3], target 2, output -1', () => {
        const nums = [1, 3];
        const result = search(nums, 3);
        expect(result).toEqual(1);
    });

    it('test case 6 Input: nums = [4,5,1,2,3], target 1, output 2', () => {
        const nums = [4, 5, 1, 2, 3];
        const result = search(nums, 1);
        expect(result).toEqual(2);
    });
});
