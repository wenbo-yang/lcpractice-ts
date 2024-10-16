xdescribe('leetcode 740: delete and earn', () => {
    function deleteAndEarn(nums: number[]): number {
        const map = new Map<number, number>();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + num);
        }

        const arr = [[0, 0], [0, 0]].concat(Array.from(map.entries()));
        arr.sort((a, b) => a[0] - b[0]);
        const df = new Array<number>(arr.length).fill(0);
        for (let i = 2; i < arr.length; i++) {
            if (canGetPrev(arr, i)) {
                df[i] = arr[i][1] + df[i - 1][1];    
            }
            else {
                df[i] = Math.max(df[i - 2][1] + arr[i][1], df[i - 1][1]);
            }
        }

        return df[df.length - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
function canGetPrev(arr: number[][], i: number): boolean {
    return arr[i][0] - 1 !== arr[i - 1][0];
}

