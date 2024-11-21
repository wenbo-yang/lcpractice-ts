xdescribe('leetcode 842: ', () => {
    function splitIntoFibonacci(num: string): number[] {
        if (num.startsWith('0')) {
            return [];
        }

        const result: number[] = [];
        for (let i = 1; i < num.length / 2; i++) {
            let first = num.substring(0, i);
            for (let j = 1; j < num.length / 2; i++) {
                let second = num.substring(i, i + j);
                let rest = num.substring(i + j);
                const sum = (Number(first) + Number(second)).toString();
                
                if (rest.startsWith(sum)) {
                    result.push(Number(first));
                    result.push(Number(second));
                    if (dfs(second, sum, rest, result)) {
                        return result;
                    }
                    result.pop();
                    result.pop();
                }
            }
        }
        
        return [];
    };

    function dfs(first: string, second: string, rest: string, result: number[]) {    
        if (second === rest) {
            return true;
        }
        
        const newRest = rest.substring(second.length);

        const sum = (Number(first) + Number(second)).toString();

        if (newRest.startsWith(sum)) {
            result.push(Number(first));
            result.push(Number(second));
            if (dfs(second, sum, newRest, result)) {
                return true;
            }
            result.pop();
            result.pop();
        }

        return false;
    }
    


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



