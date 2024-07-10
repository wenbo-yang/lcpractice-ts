xdescribe('leetcode number: name', () =>{
    function myPow(x: number, n: number): number {
        return n >= 0 ? powHelper(x, n) : (1 / powHelper(x, n));
    };

    function powHelper(x: number, n: number): number {
        if (n === 0) {
            return 1;
        }

        return powHelper(x * x, Math.floor(n/2)) * (n % 2 === 0 ? 1 : x);
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {
    });
});