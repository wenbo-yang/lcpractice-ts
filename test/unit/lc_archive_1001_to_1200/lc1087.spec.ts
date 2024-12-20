xdescribe('leetcode 1087: brace expansion', () => {
    function expand(str: string): string[] {
        let l = 0;
        const levels: string[][] = [];

        while (l < str.length) {
            if (str[l] === '{') {
                const r = findNextClosing(str, l);
                levels.push(str.substring(l, r).split(','));
                l = r + 1;
            }
            else {
                levels.push([str[l]]);
                l++;
            }
        }

        const result: string[] = [];

        dfs(levels, 0, [], result);

        return result;
    }

    function dfs(levels: string[][], depth: number, current: string[], result: string[]) {
        if (depth === levels.length) {
            result.push(current.join(''));
        }

        for (let i = 0; i < levels[depth].length; i++) {
            current.push(levels[depth][i]);
            dfs(levels, depth+1, current, result);
            current.pop();
        }
    }

    function findNextClosing(str: string, l: number): number {
        for (let i = l; i< str.length ; i++) {
            if (str[i] === '}') {
                return i;
            }
        }

        return -1
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



