xdescribe('leetcode 933: description', () => {
    class RecentCounter {
        private recentPings: number[] = [];
        constructor() {
            
        }
    
        ping(t: number): number {
            this.recentPings.push(t);

            while (this.recentPings.length > 0 && this.recentPings[0] < t - 3000) {
                this.recentPings.shift();
            }
            
            return this.recentPings.length;
        }
    }


    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
