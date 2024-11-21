xdescribe('leetcode 935: knight dialer', () => {
    function knightDialer(n: number): number {
        const map = [[4,6], [6,8], [7,9], [4,8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
        let count = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1];

        if (n === 1) {
            return 10;
        }
        
        for (let i = 1; i <= n - 1; i++) {
           const nextCount = new Array<number>(10).fill(0);
           
           for (let i = 0; i < 10; i++) {
                if (i === 5) {
                    continue;
                }

                for(const v of map[i]) {
                    const value = count[i];
                    nextCount[v] = count[v] + count[i]; 
                }
           }

           count = nextCount;
        }

        return count.reduce((a,b) => a + b);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
