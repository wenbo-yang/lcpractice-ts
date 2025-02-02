xdescribe('leetcode 1365: how many numbers are smaller than the current number', () => {
    function smallerNumbersThanCurrent(nums: number[]): number[] {
        let index = 0;
        let map = nums.map(n => [n, index++, 0]).sort((a,b) => a[0] - b[0]);
        
        let l = 0;
        let r = 0;
        let current = 0;

        while (r < map.length) {
            if (map[l][0] !== map[r][0]) {
                current += r - l;
                l = r;
            }
            map[r][2] = current;
            r++;
        }

        return map.sort((a,b) => a[1] - b[1]).map(a => a[2]);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
