xdescribe('leetcode 907: sum of subarray minimums', () => {
    function sumSubarrayMins(arr: number[]): number {
        const n = arr.length; 
        function getElement(i: number): number {
            if (i === -1 || i === n) return Number.MIN_SAFE_INTEGER;
            return arr[i];
        }
    
        let answer = 0; 
        const MOD = 1e9 + 7; 
        let stack: number[] = []; 
    
        for (let i = -1; i <= n; i++) {
            while (stack.length && getElement(stack[0]) > getElement(i)) {
                const index = stack.shift()!; 
                answer = (answer + arr[index] * (index - stack[0]) * (i - index)) % MOD;
            }
            
            stack.unshift(i);
        }
    
        return answer;

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

