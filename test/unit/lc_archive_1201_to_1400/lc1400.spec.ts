xdescribe('leetcode 1400: construct K palidrome strings', () => {
    function canConstruct(s: string, k: number): boolean {
        if (s.length < k) {
            return false;
        }
    
        const frequency: number[] = new Array(26).fill(0);
        s.split('').forEach(c => frequency[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);

        
        let oddCount = 0;
      
        for (const count of frequency) {
            if (count % 2 !== 0) {
                oddCount++;
            }
        }
      
        return oddCount <= k;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
