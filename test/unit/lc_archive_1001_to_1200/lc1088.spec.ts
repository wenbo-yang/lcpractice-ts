xdescribe('leetcode 1088: confusing numbers II', () => {
    function numOfConfusingNumbers(n: number): number {
        // 20  6, 9 10, 16, 18, 19
        // 100 6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100
        // 200 6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100, 106, 109, 110, 116, 118,119, 160, 161, 162, 168, 180, 181, 186,189,190, 191, 198,199,
        // 300 
        // 1000 ... 600, 606, 609 610 601

        const leading = [1, 6, 8, 9];
        const base = [0, 1, 6, 8, 9]

        let multiplier = 10;

        // leading * multiplier + base is next;
        let last = base[base.length - 1];
        while (last <= n) {
            for (const l of leading) {
                for (let i = 0; i < base.length; i++) {
                    if (l === 1 && base[i] === 1) {
                        continue;
                    }
                    last = l * multiplier + base[i];
                    base.push(last)
                }   
            }

            multiplier *= 10;
        }

        return base.filter(it => it <= n && it !== 0 && it !== 8 && it !== 1).length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


