xdescribe('leetcode 1395: count number of teams', () => {
    function update(x: number, v: number, n: number, c: number[]): void {
        while (x <= n) {
            c[x] += v;
            x += x & -x;
        }
    }
    
    function query(x: number, c: number[]): number {
        let sum = 0;
        while (x > 0) {
            sum += c[x];
            x -= x & -x;
        }
        return sum;
    }
    
    function numTeams(rating: number[]): number {

        let nums = [...rating];
        nums.sort((a, b) => a - b);
        const ratingLength = rating.length;
        let uniqueCount = 0;
        for (let i = 0; i < ratingLength; ++i) {
            if (i === 0 || nums[i] !== nums[i - 1]) {
                nums[uniqueCount++] = nums[i];
            }
        }
        nums = nums.slice(0, uniqueCount);
      
        // Binary search to find the index of x in nums.
        const search = (x: number): number => {
            let left = 0;
            let right = uniqueCount;
            while (left < right) {
                const mid = (left + right) >> 1;
                if (nums[mid] >= x) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left + 1;
        };
    
        let totalTeams = 0;
        let n: number = uniqueCount;
        let c = new Array(n + 1).fill(0);
        const tree1 = [...Array(uniqueCount + 1).fill(0)];
        const tree2 = [...tree1];
      
        for (const x of rating) {
            update(search(x), 1, n, c);
        }
      
        for (let i = 0; i < ratingLength; ++i) {
            const x = search(rating[i]);
            update(x, 1, n, c);
            const leftCount = query(x - 1, c);
            const rightCount = ratingLength - i - 1 - query(x, c);
            totalTeams += leftCount * rightCount;
            totalTeams += (i - leftCount) * (ratingLength - i - 1 - rightCount);
        }
      
        return totalTeams;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
