xdescribe('leetcode 875: koko eating bananas', () => {
    function minEatingSpeed(piles: number[], h: number): number {
        if (h < piles.length) {
            return -1;
        }

        piles.sort((a, b) => b - a);

        if (h === piles.length) {
            return piles[0];
        }

        // h === n + 1;  k = last / 2 or second last
        // h === n + 2;  k = last / 3 or second last / 2 or third last 
        // h === n + y;  k = last / (y + 1) or second last / (y) or 

        let div = h - piles.length + 1;
        for (let i = 0; i < piles.length; i++) {
            if (div === 0) {
                break;
            }
            else {
                piles[i] = Math.ceil(piles[i] / div);
            }

            div--;
        }

        return Math.max(...piles);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
