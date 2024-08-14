xdescribe('leetcode 388: length of longest file path', () => {
    function lengthLongestPath(input: string): number {
        let startingIndex = input.indexOf('\n');
        startingIndex = startingIndex === -1 ? input.length : startingIndex;
        const root = input.substring(0, startingIndex);
        const longestLength = [0];
        const currentLength = 0;
        const depth = 0;
        dfs(input, startingIndex, depth, currentLength, longestLength);

        return root.length + longestLength[0] + 1;
    }

    function dfs(input: string, startingIndex: number, prevDepth: number, currentLength: number, longestLength: number[]) {
        if (getDepth(input, startingIndex) === prevDepth) {
            return;
        }

        while (startingIndex < input.length) {
            const depth = getDepth(input, startingIndex);
            const file = getFile(input, startingIndex, depth);
            if (isFile(file)) {
                longestLength[0] = Math.max(currentLength + file.length + depth);
                return;
            }

            dfs(input, startingIndex + depth + file.length + 1, depth, currentLength + file.length, longestLength);
        }
    }

    function isFile(file: string): boolean {
        return file.includes('.');
    }

    function getDepth(input: string, startingIndex: number): number {
        let depth = 0;
        while (input[++startingIndex] === '\t') {
            depth++;
        }

        return depth;
    }

    function getFile(input: string, startingIndex: number, depth: number): string {
        const next = input.indexOf('\n', startingIndex + depth + 1);
        return next === -1 ? input.substring(startingIndex + depth + 1) : input.substring(startingIndex + depth + 1, next);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
