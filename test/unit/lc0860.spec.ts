xdescribe('leetcode 860: lemonade change', () => {
    function lemonadeChange(bills: number[]): boolean {
        const coffer = [0, 0];

        for (const b of bills) {
            if (b === 5) {
                coffer[0]++;
            }

            if (b === 10) {
                if (coffer[0] === 0) {
                    return false;
                }
                else {
                    coffer[0]--;
                    coffer[1]++;
                }
            }

            if (b === 20) {
                if (coffer[1] === 0) {
                    if (coffer[0] < 3) {
                        return false;
                    }
                    else {
                        coffer[0] -= 3;
                    }
                }
                else {
                    if (coffer[0] === 0) {
                        return false;
                    }
                    else {
                        coffer[1]--;
                        coffer[0]--;
                    }
                }
            }
        }

        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
