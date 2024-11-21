import { TreeNode } from "../commonLibs";

xdescribe('leetcode 958: check completeness of a binary tree', () => {
    function isCompleteTree(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }
        const nodeQueue: (TreeNode | null)[] = [root];
    
        let foundNull = false;
    
        while (nodeQueue.length > 0) {
            const currentNode = nodeQueue.shift();
    
            if (!currentNode) {
                foundNull = true;
            } else {
                if (foundNull) {
                    return false;
                }
                nodeQueue.push(currentNode.left);
                nodeQueue.push(currentNode.right);
            }
        }
    
        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
