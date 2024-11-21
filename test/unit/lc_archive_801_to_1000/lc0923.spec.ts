xdescribe('leetcode 923: 3 sum with multiplicity', () => {
    function threeSumMulti(arr: number[], target: number): number {
        const MOD: number = 1e9 + 7;
        const map = new Map<number, number>();

        for (const c of arr) {
            map.set(c, (map.get(c) || 0) + 1);
        }
    
        let result = 0;
        const keys = Array.from(map.keys());

        for (const i of keys) {
            for (const j of keys) {
                const x = map.get(i) || 0;
                const y = map.get(j) || 0;
                const k = map.get(target - i - j) || 0;

                if (i === j && i === k) {
                    result += x * (x - 1) * (x - 2) / 6 
                }
                else if (i === j && j !== k) {
                    result += x * (x - 1) / 2 * k;
                }
                else if (i < j && j < k) {
                    result += x * y * k;
                }
            }
        }


        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
