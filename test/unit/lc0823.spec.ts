xdescribe('leetcode 823: binary tree with factors', () => {
    function numFactoredBinaryTrees(arr: number[]): number {
        const mod = 1000000007;
        arr.sort((a,b) => a - b);

        const map = new Map<number, number>();

        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], 1);
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j] * 2) {
                    break;
                }

                if (arr[i] % arr[j] === 0 && map.has(arr[i]/arr[j])) {
                    map.set(arr[i], (map.get(arr[i]) || 0) +  (map.get(arr[j]) || 0) * (map.get(arr[i]/arr[j]) || 0) % mod);
                }
            }
        }

        return Array.from(map.values()).reduce((a,b) => a + b) % mod; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
