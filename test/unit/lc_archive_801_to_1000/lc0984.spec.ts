xdescribe('leetcode 984: string without aaa or bbb', () => {
    function strWithout3a3b(a: number, b: number): string {
        let result: string = '';

        while (a > 0 && b > 0) {
            if (a > b) {
                result += 'aab';
                a -= 2;
                b -= 1;
            } else if (a < b) {
                result += 'bba';
                a -= 1;
                b -= 2;
            } else {
                result += 'ab';
                a--;
                b--;
            }
        }
    
        if (a > 0) {
            result += 'a'.repeat(a);
        }
        if (b > 0) {
            result += 'b'.repeat(b);
        }
    
        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
