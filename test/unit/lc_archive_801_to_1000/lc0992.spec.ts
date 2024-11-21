xdescribe('leetcode 992: subarrays with k different integers', () => {
    function subarraysWithKDistinct(nums: number[], k: number): number {
        if (k === 0 || k > nums.length) {
            return 0;
        }

        // array of length n with k distinct integers,
        // array of length m with k - 1 distinct integers

        // array of length 1, Map<number, {i: number, j: number, values: Set<number>}>
        // iterate through length

        let subarrayStartsWithK = countSubarraysStartingPoint(nums, k);
        let subarrayStartsWithKMinusOne = countSubarraysStartingPoint(nums, k - 1);
        let totalSubarrays = 0;
    
        // Calculate the difference between the number of subarrays starting with k and k-1 distinct numbers
        for (let i = 0; i < nums.length; ++i) {
            totalSubarrays += subarrayStartsWithKMinusOne[i] - subarrayStartsWithK[i];
        }
    
        return totalSubarrays;
    };

    function countSubarraysStartingPoint(nums: number[], k: number): number[] {
        let n = nums.length; // Size of the input array
        let startPos = Array(n); // Array to store the starting positions for subarrays
        let count: number[] = Array(n + 1).fill(0); // Initialize an array to store the count of each number, filled with zeros
        let distinctNums = 0; // Number of distinct elements
    
        // Two pointers technique: 'end' is the end pointer, 'start' is the start pointer
        for (let end = 0, start = 0; end < n; ++end) {
            // If a new element is detected (count is 0), increase the number of distinct elements
            if (++count[nums[end]] == 1) {
                ++distinctNums;
            }
          
            // If distinct elements exceed k, move the start pointer to reduce the number of distinct elements
            for (; distinctNums > k; ++start) {
                // If after decrementing count goes to zero, then one distinct element is removed
                if (--count[nums[start]] == 0) {
                    --distinctNums;
                }
            }
          
            // Record the starting position for the subarray ending at 'end' which has at most k distinct elements
            startPos[end] = start;
        }
    
        return startPos;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
