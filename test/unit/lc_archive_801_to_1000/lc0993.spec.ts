import { TreeNode } from "../commonLibs";

xdescribe('leetcode 993: cousins in binary tree', () => {
    
    function isCousins(root: TreeNode | null, x: number, y: number): boolean {
        let [d1, d2] = [0, 0];
        let [p1, p2]: [TreeNode | null, TreeNode | null] = [null, null];
        const q: [TreeNode | null, TreeNode | null][] = [[root, null]];
        for (let depth = 0; q.length > 0; ++depth) {
            const t: [TreeNode| null, TreeNode | null][] = [];
            for (const [node, parent] of q) {
                if (node?.val === x) {
                    [d1, p1] = [depth, parent];
                } else if (node?.val === y) {
                    [d2, p2] = [depth, parent];
                }
                if (node?.left) {
                    t.push([node.left, node]);
                }
                if (node?.right) {
                    t.push([node.right, node]);
                }
            }
            q.splice(0, q.length, ...t);
        }
        return d1 === d2 && p1 !== p2;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
