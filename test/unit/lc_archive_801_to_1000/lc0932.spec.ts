xdescribe('leetcode 932: beautiful array', () => {
    function beautifulArray(n: number): number[] {
        // every i, j 
        // 01, 02, 03 04... // k 1, 2, 3
        //     12, 13 14
        //         23 24
        //            34

        // 2 4 3 1 5 // check to see every pair to and swap

        if (n === 1) return [1];
    
        let leftHalf: number[] = beautifulArray(Math.ceil(n / 2));
        let rightHalf: number[] = beautifulArray(Math.floor(n / 2));
        let result: number[] = new Array(n);
        let currentIndex: number = 0;
    
        for (let element of leftHalf) {
            result[currentIndex++] = element * 2 - 1;
        }
    
        for (let element of rightHalf) {
            result[currentIndex++] = element * 2;
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
