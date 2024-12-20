xdescribe('leetcode 1040: moving stones until consecutive', () => {
    function numMovesStonesII(stones: number[]): number[] {
        stones.sort((a, b) => a - b);
        const numberOfStones = stones.length;
        let minimumMoves = numberOfStones;
      
        const maximumMoves = Math.max(
            stones[numberOfStones - 1] - stones[1],
            stones[numberOfStones - 2] - stones[0]
        ) - (numberOfStones - 2);
      
        for (let startIdx = 0, endIdx = 0; endIdx < numberOfStones; ++endIdx) {
            while (stones[endIdx] - stones[startIdx] + 1 > numberOfStones) {
                ++startIdx;
            }
          
            if (endIdx - startIdx + 1 === numberOfStones - 1 && stones[endIdx] - stones[startIdx] === numberOfStones - 2) {
                minimumMoves = Math.min(minimumMoves, 2);
            } else {
                minimumMoves = Math.min(minimumMoves, numberOfStones - (endIdx - startIdx + 1));
            }
        }
      
        return [minimumMoves, maximumMoves];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
