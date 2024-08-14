xdescribe('leetcode 441: description', () => {
    function arrangeCoins(n: number): number {
        // (1 + d) * d / 2 + x = n
        // (d + d^2) = (n) * 2
        // 1 + 2 + 3 + 4 + 5 = 15
        // 1 + 2 + 3 + 4 + 5 + 6 = 21
        // d^2 + d - 2n = 2x

        // return (-1 + Math.floor(Math.sqrt(1 + (n) * 8))) / 2;
        
        let l = 0;
        let r = n;
        let pivot = 0;
        while (true) {
            let pivot = Math.floor((r + l) / 2);
            const c = straddle(pivot, n)
            if (c === 0){
                break;
            }

            if (c > 0) {
                r = pivot;
                continue;
            }

            l = pivot + 1;
        }

        return pivot;
    };

    function straddle(x: number, n: number): number {
        if (x*(x+1)/2 > n && (x - 1)*(x)/2 <= n) {
            return 0;
        }

        if (x*(x+1)/2 < n) {
            return -1
        }

        return 1;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

