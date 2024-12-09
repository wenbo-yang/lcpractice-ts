xdescribe('leetcode 1089: duplicate zeros', () => {
    function duplicateZeros(arr: number[]): void {
        // [0, 1, 2, 0, 3, 4]
        // [0, 0, 1, 2  3  4]
        const stack: number[] = [];
        for (const n of arr) {
            stack.push(n);
            if (n === 0) {
                stack.push(0);
            }

            if (stack.length === arr.length) {
                break;
            }
        }
        let index = 0;
        stack.forEach(n => arr[index++] = n);
    };

    function duplicateZerosInplace(arr: number[]): void {
        let n: number = arr.length; 
        let i: number = -1;
        let count: number = 0; 
      
        while (count < n) {
            i++;
            count += arr[i] === 0 ? 2 : 1;
        }
      
        let j: number = n - 1;
      
        if (count === n + 1) {
            arr[j] = 0;
            j--; 
            i--; 
        }
      
        
        while (j >= 0) {
            arr[j] = arr[i];
            j--; 
            if (arr[i] === 0 && j >= 0) {
                arr[j] = 0;
                j--; 
            }
            i--; 
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
