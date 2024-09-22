xdescribe('leetcode 659: split arry into two consecutive subsequences', () => {
    function isPossible(nums: number[]): boolean {
        const arr1: number[] = [];
        const arr2: number[] = [];
        arr1.push(nums[0])
        for(let i = 1; i < nums.length; i++) {
            if (arr1[arr1.length - 1] === nums[i] - 1) {
                arr1.push(nums[i]);
            } else if (arr1[arr1.length - 1] === nums[i]) {
                arr2.push(nums[i]);
                break;
            }
            else {
                return false;
            }
        }

        let newStart = arr1.length + arr2.length;
        
        for (let i = newStart; i < nums.length; i++) {
            if (arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
                if( arr1[arr1.length - 1] === nums[i] - 1) {
                    const targetArray = arr1.length <= arr2.length ? arr1 : arr2;
                    targetArray.push(nums[i]);
                }
                else {
                    break;
                }
            }
            else {
                if (nums[i] - 1 === arr1[arr1.length - 1]) {
                    arr1.push(nums[i]);
                } 
                else if (nums[i] - 1 === arr2[arr2.length - 1]) {
                    arr2.push(nums[i]);
                }
                else {
                    break;
                }
            }
        }

        return arr1.length + arr2.length === nums.length;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
