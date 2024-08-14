xdescribe('leetcode 301: remove invalid parenthesis', () => {
    function removeInvalidParentheses(s: string): string[] {
        //
        let invalidList = checkValid(s);

        if (invalidList.length === s.length) {
            return [];
        }

        // remove consecutive invalid closings and leave only 1
        let stackIndex = 0;
        const sArray = s.split('');

        for (let i = 1; i < invalidList.length; i++) {
            if (invalidList[i].p === invalidList[i - 1].p) {
                sArray[invalidList[i].index] = '\r';
            }
        }

        const reducedArray = sArray.filter((it) => it !== '\r') || '';
        invalidList = checkValid(reducedArray.join());
        const result = new Set<string>();

        // split array according to coordinates for each array
        // and the

        return Array.from(result);
    }

    function attemptToRemove(reducedArray: string[], p: string, index: number, result: Set<string>) {
        const allCandidates: number[] = [];
        if (p === ')') {
            for (let i = 0; i <= index; i++) {
                if (reducedArray[i] === ')') {
                    allCandidates.push(i);
                }
            }
        }
    }

    function checkValid(s: string): { p: string; index: number }[] {
        const stack: { p: string; index: number }[] = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push({ p: '(', index: i });
            }

            if (s[i] === ')') {
                if (stack[stack.length - 1].p === '(') {
                    stack.pop();
                }
            } else {
                stack.push({ p: ')', index: i });
            }
        }

        return stack;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
