xdescribe('leetcode 672: light bulb switches', () => {
    function flipLights(n: number, presses: number): number {
        const ops: number[] = [0b111111, 0b010101, 0b101010, 0b100100];

        const vis = new Set<number>();
        n = Math.min(n, 6);

        for (let mask = 0; mask < 1 << 4; ++mask) {
            let cnt = mask.toString(2).split('').filter(x => x === '1').length;
            if (cnt <= presses && cnt % 2 == presses % 2) {
                let t = 0;
                for (let i = 0; i < 4; ++i) {
                    if (((mask >> i) & 1) == 1) {
                        t ^= ops[i];
                    }
                }
                t &= ((1 << 6) - 1);
                t >>= (6 - n);
                vis.add(t);
            }
        }
        return vis.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
