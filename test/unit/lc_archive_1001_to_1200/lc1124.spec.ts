xdescribe('leetcode 1124: longest well performing interval', () => {
    function longestWPI(hours: number[]): number {
        let longestInterval: number = 0;
        let score: number = 0;
        let firstOccurrence: Map<number, number> = new Map(); 
    
        for (let i = 0; i < hours.length; ++i) {
            score += hours[i] > 8 ? 1 : -1;
            if (score > 0) {
                longestInterval = i + 1;
            } else {
                if (firstOccurrence.has(score - 1)) {
                    longestInterval = Math.max(longestInterval, i - ((firstOccurrence.get(score - 1) || 0)));
                }
            }
          
            if (!firstOccurrence.has(score)) {
                firstOccurrence.set(score, i);
            }
        }
        return longestInterval;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
