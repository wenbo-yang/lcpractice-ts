xdescribe('leetcode 599: miniumn index sum of two lists', () => {
    function findRestaurant(list1: string[], list2: string[]): string[] {
        const map1 = new Map<string, number>();
        let index = 0;
        for (const w of list1) {
            if (!map1.get(w)) {
                map1.set(w, index);
            }

            index++;
        }

        let result: string[] = []
        let currentIndexSum = Number.MAX_SAFE_INTEGER;
        index = 0; 
        for (const w of list2) {
            if (map1.get(w)) {
                const indexSum = (map1.get(w) || 0) + index;
                if (indexSum < currentIndexSum) {
                    currentIndexSum = indexSum;
                    result = [w];
                }
                else if (indexSum === currentIndexSum) {
                    result.push(w);
                }
            } 
            index++;
        }        
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
