xdescribe('leetcode 312: max coin', () => {
    function maxCoins(nums: number[]): number {
        const memory: number[][] = new Array<Array<number>>(nums.length + 2).fill([]).map(r => new Array<number>(nums.length + 2).fill(0));
        return maxCoinsHelper([1, ...nums, 1], 1, nums.length, memory);
    };

    function maxCoinsHelper(nums: number[], l: number, r: number, memory: number[][]) {
        if(l>r) return 0;
        if(memory[l][r]>0) return memory[l][r];
        
        if(l==r) return nums[l-1]*nums[l]*nums[l+1];
        
        let ans=0;
        for(let k= l ;k<= r; ++k)
             ans=Math.max(ans, maxCoinsHelper(nums, l, r-1, memory) + nums[l-1]*nums[k]*nums[r+1] + maxCoinsHelper(nums, k+1, r, memory));
        
        memory[l][r] = ans;
        
        return memory[l][r];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
