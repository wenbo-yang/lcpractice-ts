import { TreeNode } from "./commonLibs";

xdescribe('leetcode 872: leaf similiar trees ', () => {
    function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
        const leafNodes1: number[] = [];
        const leafNodes2: number[] = [];

        traversal(root1, leafNodes1);
        traversal(root2, leafNodes1);

        while(leafNodes1.length || leafNodes2.length) {
            if(leafNodes1.pop() !== leafNodes2.pop()) {
                return false;
            }
        }

        return true;
    };

    function traversal(root: TreeNode | null, leafNodes: number[]) {
        if (!root) {
            return;
        }

        if (isLeafNode(root)) {
            leafNodes.push(root.val);
            return;
        }

        traversal(root.left, leafNodes);
        traversal(root.right, leafNodes);
    }
    
    function isLeafNode(root: TreeNode) {
        return !root.left && !root.right;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


