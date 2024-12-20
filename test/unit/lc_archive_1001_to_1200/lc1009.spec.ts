xdescribe('leetcode 1009: complement of base 10', () => {
    function bitwiseComplement(n: number): number {
        if (n === 0) {
            return 1;
        }
    
        let result: number = 0;
        let foundOne: boolean = false; 
    
        for (let i: number = 30; i >= 0; --i) {
            let bit: number = n & (1 << i);
    
            if (!foundOne && bit === 0) continue;
    
            foundOne = true;
            if (bit === 0) {
                result |= (1 << i);
            }
        
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
