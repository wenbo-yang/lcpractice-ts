xdescribe('leetcode 483: description', () => {
    function smallestGoodBase(n: string): string {
        const num = Number(n);
        for (let i = Math.floor(Math.log(num + 1) / Math.log(2)); i >= 2; i--) {
            let left = 2,
                right = Math.pow(num, 1.0 / (i - 1)) + 1;
            while (left < right) {
                let mid = left + (right - left) / 2,
                    sum = 0;
                for (let j = 0; j < i; ++j) {
                    sum = sum * mid + 1;
                }
                if (sum == num) return mid.toString();
                if (sum < num) left = mid + 1;
                else right = mid;
            }
        }
        return (num - 1).toString();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
