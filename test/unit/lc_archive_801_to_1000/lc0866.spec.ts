xdescribe('leetcode 866: description', () => {
    function isPrime(x: number): boolean {
        if (x < 2) return false; 
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false; 
        }
        return true; 
    }
    
    function isPalindrome(x: number): boolean {
        let original = x;
        let reversed = 0;
        while (x > 0) {
            reversed = reversed * 10 + x % 10; 
            x = Math.floor(x / 10); 
        }
        return reversed === original; 
    }
    
    function primePalindrome(N: number): number {
        while (true) {
            if (isPalindrome(N) && isPrime(N)) {
                return N; 
            }
            if (N > 1e7 && N < 1e8) {
                N = 1e8;
            }
            N++; 
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
