xdescribe('leetcode 43: multiply string', () =>{
    function multiply(num1: string, num2: string): string {
        const smaller = num1.length < num2.length ? num1 : num2;
        const bigger = num1.length >= num2.length ? num1 : num2;

        const num1Array = convertToNumsArray(smaller);
        const num2Array = convertToNumsArray(bigger);
        console.log(num1Array);
        console.log(num2Array);


        const mat = initialzeMat(Math.min(num1Array.length, num2Array.length), num1Array.length + num2Array.length )
        let r = 0;
        for (let i = 0; i < num1Array.length; i++) {
            let carry = 0
            for (let j = 0; j < num2Array.length; j++) {
                const product = num1Array[i] * num2Array[j] + carry;
                carry = Math.floor(product / 10);
                const currentDigit = product - carry  * 10;
                mat[i][i + j] = currentDigit;

            }

            if (carry > 0) {
                mat[i][i + num2Array.length] = carry;
            }

        }
        
        const resultNumsArray = columSum(mat);
        
        while(resultNumsArray[resultNumsArray.length - 1] === 0) {
            resultNumsArray.pop()
        }

        console.log(resultNumsArray);
        
        return resultNumsArray.length === 0 ? '0' : convertArrayToString(resultNumsArray);
    };

    function columSum(mat: number[][]): number[] {
        const result: number[] = [];
        let carry: number = 0;
        for (let i = 0; i < mat[0].length; i++) {
            let sum: number = carry;
            for (let j = 0; j < mat.length; j++) {
                sum += mat[j][i]
            }
            carry = Math.floor(sum / 10);
            const currentDigit = sum - carry * 10;
            result.push(currentDigit);
        }
        return result;
    }

    function convertToNumsArray(num1: string) {
        return num1.split('').map(s => Number(s)).reverse();
    }
    
    function initialzeMat(rows: number, cols: number): number[][] {
        return Array<Array<number>>(rows).fill([]).map(r => Array<number>(cols).fill(0));
    }

    function convertArrayToString(resultNumsArray: number[]): string {
        return resultNumsArray.reverse().join('');
    }


    // it('test case 1 Input: num1 = "2", num2 = "3", output "6" ', () => {
    //     const num1 = '2';
    //     const num2 = '3';

    //     const result = multiply(num1, num2);

    //     expect(result).toEqual('6');
    // });

    // it('test case 2 Input: Input: num1 = "123", num2 = "456", output "56088" ', () => {
    //     const num1 = '123';
    //     const num2 = '456';

    //     const result = multiply(num1, num2);

    //     expect(result).toEqual('56088');
    // });

    it('test case 3 Input: Input: num1 = "99", num2 = "99", output "9801" ', () => {
        const num1 = '99';
        const num2 = '99';

        const result = multiply(num1, num2);

        expect(result).toEqual('9801');
    });
});





