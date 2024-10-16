xdescribe('leetcode 739: daily temperatures', () => {
    function dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[][] = [[temperatures[0], 0]];
        const result: number[] = new Array<number>(temperatures.length).fill(0);

        for (let i = 1; i < temperatures.length; i++) {
            if (temperatures[i] > lastValueOf(stack)) {
                while(stack.length && temperatures[i] > lastValueOf(stack)) {
                    const index = lastIndexOf(stack);
                    result[index] = i - index;
                    stack.pop();
                }
    
            
            }
            stack.push([temperatures[i], i]);
        }

        return result;
    };

    function lastValueOf(stack: number[][]): number {
        return stack[stack.length - 1][0];
    }

    function lastIndexOf(stack: number[][]): number {
        return stack[stack.length - 1][1];
    }

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




