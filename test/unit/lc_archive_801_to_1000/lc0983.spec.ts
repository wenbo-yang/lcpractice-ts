xdescribe('leetcode 983: minimum cost for tickets', () => {
    function mincostTickets(days: number[], costs: number[]): number {
        const totalDays = days.length;
        const lastDay = days[totalDays - 1] + 1; 
        const [cost1DayPass, cost7DayPass, cost30DayPass] = costs; 
        let dp: number[] = new Array(lastDay).fill(0); 
    
        for (let day = 1; day < lastDay; day++) {
            let costIfBuy1DayPass = days.includes(day) ? dp[day - 1] + cost1DayPass : dp[day - 1];
            let costIfBuy7DayPass = (day > 7 ? dp[day - 7] : dp[0]) + cost7DayPass;
            let costIfBuy30DayPass = (day > 30 ? dp[day - 30] : dp[0]) + cost30DayPass;
    
            dp[day] = Math.min(costIfBuy1DayPass, costIfBuy7DayPass, costIfBuy30DayPass);
        }
        
        return dp[lastDay - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
