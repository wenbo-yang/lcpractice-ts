xdescribe('leetcode 473: match sticks to square', () => {
    function makesquare(matchsticks: number[]): boolean {
        matchsticks.sort((a,b) => a - b);
        const sum = matchsticks.reduce((a,b) => a + b);
        if (matchsticks.length < 4 || sum % 4 !== 0 || matchsticks[matchsticks.length - 1] >= sum / 4) {
            return false;
        }

        const sideLength = sum / 4;

        const maskedIndices = new Set<string>()
        findCombinationSum(sideLength, matchsticks, new Set<number>, maskedIndices);
        
        return maskedIndices.size === 4;
    };

    function findCombinationSum(target: number, matchsticks: number[], currentIndices: Set<number>, maskedIndices: Set<string>): boolean {
        if (target < 0) {
            return false;
        }

        if (target === 0) { 
            if (notOverlapping(maskedIndices, currentIndices)) {
                maskedIndices.add(Array.from(currentIndices.values()).join())
                return true;
            }
            
            return false;
        }
        

        let result = false;

        for (let i = matchsticks.length - 1; i >= 0; i--) {
            if (currentIndices.has(i)) {
                continue;
            }

            currentIndices.add(i); 
            result = result || findCombinationSum(target - matchsticks[i], matchsticks, currentIndices, maskedIndices);
            currentIndices.delete(i);
        }

        return result;
    }

    function notOverlapping(maskedIndices: Set<string>, currentIndices: Set<number>) {
        for (const value of maskedIndices.values()) {
            const indices = value.split(',').map( i => Number(i));
            for (const index of indices) {
                if(currentIndices.has(index)) {
                    return false;
                }
            }
        }

        return true;
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


