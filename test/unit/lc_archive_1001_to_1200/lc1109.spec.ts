xdescribe('leetcode 1109: corporate flight booking', () => {
    function corpFlightBookings(bookings: number[][], n: number): number[] {
        const answer: number[] = new Array(n).fill(0);

        for (const [first, last, seats] of bookings) {
            answer[first - 1] += seats;
            if (last < n) {
                answer[last] -= seats;
            }
        }
    
        
        for (let i = 1; i < n; ++i) {
            answer[i] += answer[i - 1];
        }
    
        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
