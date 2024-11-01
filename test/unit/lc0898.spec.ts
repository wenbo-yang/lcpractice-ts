xdescribe('leetcode 898: bitwise ors of sub arrays', () => {
    function subarrayBitwiseORs(arr: number[]): number {
        let uniqueOrValues: Set<number> = new Set(); 
        let currentOr: number = 0;                   
      
        
        for (let i = 0; i < arr.length; i++) {
            currentOr |= arr[i];                 
            let subarrayOr: number = 0;              
          
            for (let j = i; j >= 0; j--) {
                subarrayOr |= arr[j];               
                uniqueOrValues.add(subarrayOr);     

                if (subarrayOr === currentOr) break;
            }
        }
      
        return uniqueOrValues.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
