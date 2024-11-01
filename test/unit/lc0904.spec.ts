xdescribe('leetcode 904: fruit into baskets', () => {
    function totalFruit(fruits: number[]): number {
        // longest subsequence of the same value except 1
        let l = 0; 
        let r = 0;
        let diffCount = 0;
        let max = 0;
        
        // [0, 1, 2, 2]
        //     l  r


        while (r < fruits.length) {
            if (fruits[r] !== fruits[l]) {
                if (diffCount === 0) {
                    diffCount = 1;
                }
                else {
                    max = Math.max(max, r - l);
                    if (fruits[l] !== fruits[r - 1]) {
                        l++;
                        continue;
                    }
                    else {
                        diffCount = 0;
                    }
                }
            }
            
            r++;
        }

        return max;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
