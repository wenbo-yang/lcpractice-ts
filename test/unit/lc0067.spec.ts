xdescribe('leetcode 67: add binary', () => {
    function addBinary(a: string, b: string): string {
        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;

        let resultArray: string[] = [];

        while (i >= 0 || j >= 0) {
            let left = i >= 0 ? a.charCodeAt(i) - '0'.charCodeAt(0) : 0;
            let right = j >= 0 ? b.charCodeAt(j) - '0'.charCodeAt(0) : 0;

            const sum = [left, right, carry].reduce((a, b) => a + b);
            if (sum === 2) {
                carry = 1;
                resultArray.push('0');
            } else if (sum === 3) {
                carry = 1;
                resultArray.push('1');
            } else {
                carry = 0;
                resultArray.push(sum.toString());
            }
            i--;
            j--;
        }

        if (carry > 0) {
            resultArray.push('1');
        }

        return resultArray.reverse().join('');
    }

    it('test case 1 Input: a = "11", b = "1", target = 5, output 100', () => {
        const result = addBinary('11', '1');
        expect(result).toEqual('100');
    });
});
