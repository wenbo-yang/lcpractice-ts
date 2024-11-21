xdescribe('leetcode 846: hand of straights', () => {
    function isNStraightHand(hand: number[], groupSize: number): boolean {
        // greedy + sort
        const map = new Map<number, number>();
        for (let n of hand) {
            map.set(n, (map.get(n) || 0) + 1 );
        }
        const sortedMap = new Map<number, number>(Array.from(map.entries()).sort((a,b) => a[0] - b[0]));
        let index = 0;

        for (const entry of sortedMap.entries()) {
            if (entry[1] === 0) {
                continue;
            }
            else {
                // fill in
                let start = entry[0];
                const targets = new Array<number>(groupSize).fill(0).map(v => start++);

                for(const c of targets) {
                    if ((sortedMap.get(c) || 0) === 0) {
                        return false;
                    }
                    else {
                        sortedMap.set(c, (sortedMap.get(c) || 1) - 1);
                    }
                }
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
