xdescribe('leetcode 914: ', () => {
    function gcd(a: number, b: number): number {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    function hasGroupsSizeX(deck: number[]): boolean {
        const counts: { [key: number]: number } = {};

        for (const value of deck) {
            if (counts[value]) {
            counts[value]++;
            } else {
            counts[value] = 1;
            }
        }

        let gcdOfCounts = -1;

        for (const count of Object.values(counts)) {
            if (count) {
                if (gcdOfCounts === -1) {
                    gcdOfCounts = count;
                } else {
                    gcdOfCounts = gcd(gcdOfCounts, count);
                }
            }
        }

        return gcdOfCounts >= 2;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
