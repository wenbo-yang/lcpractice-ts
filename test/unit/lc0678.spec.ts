xdescribe('leetcode 678: valid parenthesis string', () => {
    function checkValidStringMinMax(s: string): boolean {
        let min_op = 0;
        let max_op = 0;
        
        for (const c of s) {
            if (c == '(') ++min_op; else --min_op;
            if (c != ')') ++max_op; else --max_op;
            if (max_op < 0) return false;
            min_op = Math.max(0, min_op);
        }
        
        return min_op == 0;
    }
    function checkValidString(s: string): boolean {
        
        let stacks: string[][] = [[s[0]]];

        for (let i = 1; i < s.length; i++) {
            if (s[i] === '(') {
                pushStacks(stacks, '(');
            }

            if (s[i] === ')') {
                popStacks(stacks);
            }

            if (s[i] === '*') {
                const copyTreatAsOpenBracket = copyStacks(stacks);
                const copyTreatAsEmptyString = copyStacks(stacks);
                
                // treat this as closing bracket;
                popStacks(stacks);
                
                // treat this as open brackets
                pushStacks(copyTreatAsOpenBracket, '(');

                // treat this as empty strcing
                // do nothing
                
                stacks = concat(stacks, copyTreatAsEmptyString, copyTreatAsOpenBracket);
            }
        }

        return stacks.filter(s => s.length === 0).length > 0;
    };

    function pushStacks(stacks: string[][], c: string) {
        for(let i = 0; i < stacks.length; i++) {
            stacks[i].push(c);
        }
    }

    function popStacks(stacks: string[][]) {
        const currentLength = stacks.length;
        for (let i = 0; i < currentLength; i++) {
            if (lastOf(stacks[i]) === '(') {
                stacks.pop();
            }
        }

        return;
    }

    function copyStacks(stacks: string[][]): string[][] {
        const result: string[][] = [];

        for (let i = 0; i < stacks.length; i++) {
            result.push(Array.from(stacks[i]));
        }

        return result;
    }


    function concat(stacks: string[][], copyTreatAsEmptyString: string[][], copyTreatAsOpenBracket: string[][]): string[][] {
        return stacks.concat(copyTreatAsEmptyString).concat(copyTreatAsOpenBracket);
    }


    function lastOf(stack: string[]) {
        return stack[stack.length - 1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






