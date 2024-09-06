xdescribe('leetcode 477: total hamming distance', () => {
    function totalHammingDistance(nums: number[]): number {
        const distinct = Array.from(new Set<number>(nums).values());
        let sum = 0;
        const mem = new Map<number, number>();
        for (let i = 0; i < distinct.length; i++) {
            for (let j = i + 1; j < distinct.length; j++) {
                sum += hamingDistance(distinct[j], distinct[i], mem);
            }
        }

        return sum;
    }

    function hamingDistance(num1: number, num2: number, mem: Map<number, number>): number {
        let x = 10000000000;
        let xor = num1 ^ num2;
        let distance = 0;

        if (mem.has(xor)) {
            return mem.get(xor) || 0;
        }

        while (x > 0) {
            if ((xor && 1) === 1) {
                distance++;
            }

            xor = xor >> 1;
            x = x >> 1;
        }

        mem.set(xor, distance);

        return distance;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
