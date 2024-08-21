xdescribe('leetcode 486: predict winner', () => {
    function predictTheWinner(nums: number[]): boolean {
        const sum = nums.reduce((a, b) => a + b);
        const mem = new Map<string, boolean>();
        return canWinHelper(nums, 0, nums.length - 1, 0, 0, sum, true, mem)  
    };

    function canWinHelper(nums: number[], start: number, end: number, myScore: number, myOpponentsScore, sum: number, myTurn: boolean, mem: Map<string, boolean>): boolean {
        if (start >= end) {
            return myScore >= myOpponentsScore;
        }

        if (sum < myOpponentsScore) {
            mem.set([start, end, myScore, myOpponentsScore, myTurn].join(), false);
            return false;
        }

        if (mem.has([start, end, myScore, myOpponentsScore, myTurn].join())) {
            return mem.get([start, end, myScore, myOpponentsScore, myTurn].join()) || false;
        }

        let result = false;
        
        if (myTurn) {
            result = canWinHelper(nums, start + 1, end, myScore + (myTurn ? nums[start] : 0), myOpponentsScore + (myTurn ? 0 : nums[start]), sum - nums[start], !myTurn, mem) || 
               canWinHelper(nums, start, end + 1, myScore + (myTurn ? nums[end] : 0) , myOpponentsScore + (myTurn ? 0 : nums[end]), sum - nums[end], !myTurn, mem);
        }
        else {
            result = canWinHelper(nums, start + 1, end, myScore + (myTurn ? nums[start] : 0), myOpponentsScore + (myTurn ? 0 : nums[start]), sum - nums[start], !myTurn, mem) && 
            canWinHelper(nums, start, end + 1, myScore + (myTurn ? nums[end] : 0) , myOpponentsScore + (myTurn ? 0 : nums[end]), sum - nums[end], !myTurn, mem);
        }
        

        mem.set([start, end, myScore, myOpponentsScore, myTurn].join(), result);

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


