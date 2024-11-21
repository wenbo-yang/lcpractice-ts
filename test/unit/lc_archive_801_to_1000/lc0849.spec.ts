xdescribe('leetcode 849: max distance to closest person', () => {
    function maxDistToClosest(seats: number[]): number {
        let l = seats.findIndex(s => s === 1); 
        if (l === -1) {
            return 0;
        }

        let r = l + 1;
        let maxDistance = l;
        let position = 0;
        while (r < seats.length) {
            if (seats[r] === 1) {
                const mid = Math.floor((r + l) / 2);

                if (mid - l > maxDistance) {
                    maxDistance = mid - l;
                    position = mid;
                }

                l = r;
            }

            r++;
        }

        return seats[seats.length - 1] === 1 || ((seats.length - 1 + l) <= maxDistance) ? position :  seats.length - 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
