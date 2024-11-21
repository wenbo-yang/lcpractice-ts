xdescribe('leetcode 989: add to array-form integer', () => {
    function addToArrayForm(num: number[], k: number): number[] {
        let kArray: number[] = [...String(k)].map(Number);
        let answer: number[] = [];  
        let carry: number = 0;
    
        while (num.length || kArray.length || carry) {
            let numDigit = num.pop() || 0;
        
            let kDigit = kArray.pop() || 0;
        
            carry += numDigit + kDigit;
        
            answer.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    
        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
