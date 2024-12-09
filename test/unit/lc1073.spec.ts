xdescribe('leetcode 1073: adding two negabinary numbers', () => {
    function addNegabinary(arr1: number[], arr2: number[]): number[] {
        let indexArr1 = arr1.length - 1;
        let indexArr2 = arr2.length - 1;
        const result: number[] = [];
        let carry = 0;
        while (indexArr1 >= 0 || indexArr2 >= 0 || carry) {
            const valArr1 = indexArr1 < 0 ? 0 : arr1[indexArr1];
            const valArr2 = indexArr2 < 0 ? 0 : arr2[indexArr2];

            let sum = valArr1 + valArr2 + carry;
            carry = 0;
            if (sum >= 2) {
                sum -= 2;
                carry = -1;
            } else if (sum === -1) {
                sum = 1;
                carry = 1;
            }
            result.unshift(sum);

            indexArr1--;
            indexArr2--;
        }

        while (result.length > 1 && result[0] === 0) {
            result.shift();
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
