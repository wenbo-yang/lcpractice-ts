xdescribe('leetcode 71: simplify path', () => {
    function simplifyPath(path: string): string {
        const stack: string[] = [];

        let index: number = 0;
        while (index < path.length) {
            if (isGoingBack(path, index)) {
                if (stack.length != 0) {
                    stack.pop();
                }

                index += 3;
            } else if (isNoOp(path, index)) {
                index = getNextPath(path, ++index);
            } else {
                let folder = getFolderPath(path, ++index);
                if (folder) {
                    stack.push(folder);
                }

                index += folder.length;
            }
        }

        let resultArray: string[] = [];

        while (stack.length != 0) {
            resultArray.push(stack.pop() || '');
        }

        return resultArray.length === 0 ? '/' : resultArray.reverse().join('');
    }

    function getNextPath(path: string, index: number): number {
        while (index < path.length && path.charAt(index) != '/') {
            index++;
        }

        return index;
    }

    function isNoOp(path: string, index: number): boolean {
        return path.charAt(index++) == '/' && index < path.length && (path[index] == '.' || path[index] == '/');
    }

    function isGoingBack(path: string, index: number): boolean {
        return index + 2 < path.length && path.charAt(index++) == '/' && path.charAt(index++) == '.' && path.charAt(index++) == '.';
    }

    function getFolderPath(path: string, index: number): string {
        let array: string[] = [];
        while (index < path.length && path[index] != '/') {
            array.push(path.charAt(index));
            index++;
        }

        return array.join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
