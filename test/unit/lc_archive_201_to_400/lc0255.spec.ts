xdescribe('leetcode 255: verify preorder bst', () => {
    // [5,2,1,3,6]
    //     5
    //   2  1
    // 3  6

    function verifyPreorder(treeValues: number[]): boolean {
        let lowBound = Number.MIN_SAFE_INTEGER;
        const sk: number[] = [];
        for (const each of treeValues) {
            if (each < lowBound) {
                return false;
            }

            while (!sk.length && each > sk[sk.length - 1]) {
                lowBound = sk.pop() || Number.MIN_SAFE_INTEGER;
            }
            sk.push(each);
        }
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
