import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1028: recover a tree from preorder traversal', () => {
    function recoverFromPreorder(traversal: string): TreeNode | null {
        let nodesStack: TreeNode[] = [];
        let currentDepth = 0;
        let currentValue = 0;

        for (let i = 0; i < traversal.length; ++i) {
            if (traversal[i] === '-') {
                currentDepth++;
            } else {
                currentValue = 10 * currentValue + parseInt(traversal[i]);
            }

            if (i + 1 === traversal.length || (traversal[i] !== '-' && traversal[i + 1] === '-')) {
                let newNode = new TreeNode(currentValue);

                while (nodesStack.length > currentDepth) {
                    nodesStack.pop();
                }

                if (nodesStack.length > 0) {
                    if (nodesStack[nodesStack.length - 1].left === null) {
                        nodesStack[nodesStack.length - 1].left = newNode;
                    } else {
                        nodesStack[nodesStack.length - 1].right = newNode;
                    }
                }

                nodesStack.push(newNode);

                currentDepth = 0;
                currentValue = 0;
            }
        }

        while (nodesStack.length > 1) {
            nodesStack.pop();
        }

        return nodesStack.length > 0 ? nodesStack[0] : null;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
