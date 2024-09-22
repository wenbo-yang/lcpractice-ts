import { TreeNode } from "./commonLibs";

xdescribe('leetcode 663: equal tree partition', () => {
    function canPartitionTree(root: TreeNode | null): boolean {
        // turn into sum tree
        if (!root) {
            return false;
        }

        const map = new Map<number, TreeNode>();
        const sum = convertIntoSubtreeSumTree(root, map);

        return map.get(sum / 2) !== root
    }

    function convertIntoSubtreeSumTree(root: TreeNode | null, map: Map<number, TreeNode>): number {
        if (!root) {
            return 0;
        }

        const left = convertIntoSubtreeSumTree(root.left, map);
        const right = convertIntoSubtreeSumTree(root.right, map);

        const sum = root.val + left + right;
        root.val = sum;

        if (!map.has(sum)) {
            map.set(sum, root);
        }

        return sum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


