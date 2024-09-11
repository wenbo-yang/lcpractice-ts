import { NTreeNode } from '../commonLibs';

xdescribe('leetcode 559: max depth of n-tree', () => {
    function maxDepth(root: NTreeNode | null): number {
        if (!root) {
            return 0;
        }
        let max = 0;
        for (let i = 0; i < root.children.length; i++) {
            max = Math.max(max, maxDepth(root.children[i]));
        }

        return max + 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
