import { TreeNode } from './commonLibs';

xdescribe('leetcode 1110: delete nodes and return forest', () => {
    function delNodes(root: TreeNode | null, toDelete: number[]): Array<TreeNode | null> {
        const toDeleteValuesSet = new Set<number>(toDelete);
        const toDeletNodes: [(TreeNode | null), (TreeNode | null)][] = [];
        const nodeSet = new Set<TreeNode | null>();
        
        preorderTraversal(root, null, toDeleteValuesSet, toDeletNodes, nodeSet);

        const result: (TreeNode | null)[] = [];

        if (toDeletNodes[0][0] !== root) {
            result.push(root);
        }
        else {
            result.push(root?.left || null);
            result.push(root?.right || null);
            root = null;
        }
        
        for (const node of toDeletNodes) {
            const parent = node[1];
            if (!parent) continue; 
            
            if (parent.left === node[0]) {
                parent.left = null;
            }
            else {
                parent.right = null;
            }

            if (!node[0]) continue;

            result.push(node[0].left);
            result.push(node[0].right);
        }

        return result;
    };

    function preorderTraversal(root: TreeNode | null, parent: TreeNode | null, toDeleteValuesSet: Set<number>, toDeletNodes: [(TreeNode | null), (TreeNode | null)][], nodeSet: Set<TreeNode | null>) {
        if (!root) {
            return;
        }

        if (toDeleteValuesSet.has(root.val)) {
            toDeletNodes.push([root, parent]);
        }

        nodeSet.add(root);
        preorderTraversal(root.left, root, toDeleteValuesSet, toDeletNodes, nodeSet);
        preorderTraversal(root.left, root, toDeleteValuesSet, toDeletNodes, nodeSet);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


