xdescribe('leetcode 299: bulls and cows', () => {
    function getHint(secret: string, guess: string): string {
        let x = 0,
            y = 0;
        let cnt1 = new Array<number>(10).fill(0);
        let cnt2 = new Array<number>(10).fill(0);
        for (let i = 0; i < secret.length; ++i) {
            let a = secret[i].charCodeAt(0) - '0'.charCodeAt(0),
                b = guess[i].charCodeAt(0) - '0'.charCodeAt(0);
            if (a == b) {
                ++x;
            } else {
                ++cnt1[a];
                ++cnt2[b];
            }
        }
        for (let i = 0; i < 10; ++i) {
            y += Math.min(cnt1[i], cnt2[i]);
        }
        return `${x}A${y}B`;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
