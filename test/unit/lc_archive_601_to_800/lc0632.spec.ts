xdescribe('leetcode 632: smallest k range', () => {
    // class OrderedList<T> {
    //     private list: T[] = [];
    //     private cb: (value1: T, value2: T) => number;
    //     constructor(cb: (a: T, b :T) => number) {
    //         this.cb = cb;
    //     }
    // }
    
    function smallestRange(nums: number[][]): number[] {
        let index = 0;
        const orderedList = nums.map(r => [r[0], index++, 0]).sort((a, b) => b[0] - a[0]);
        
        
        let smallest = [0,0,0];
        let result = [-100000, 100000];

        do {
            const range = getRange(orderedList);

            if (rangeIsSmaller(range, result)) {
                result = range;
            }

            removeSmallestAndOfferNext(orderedList, nums);
            smallest = getSmallest(orderedList);
        }
        while ((smallest[2] < nums[smallest[1]].length))
        
        return result;
    };

    function rangeIsSmaller(range: number[], result: number[]): boolean {
        return range[1] - range[0] <= result[1] - result[0] && range[0] < result[0];
    }
    
    function getRange(orderedList: number[][]) {
        return [orderedList[orderedList.length - 1][0], orderedList[0][0]];
    }

    function getSmallest(orderedList: number[][]): number[] {
        return orderedList[orderedList.length - 1];
    }
    
    function removeSmallestAndOfferNext(orderedList: number[][], nums: number[][]) {
        const smallest = orderedList[orderedList.length - 1];
        orderedList.pop();
        orderedList.push([nums[smallest[1]][smallest[2] + 1], smallest[1], smallest[2] + 1]);

        if (orderedList[orderedList.length - 1][0]) {
            orderedList.sort((a, b) => b[0] - a[0]);
        }
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







