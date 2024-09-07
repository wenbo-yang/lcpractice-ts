import { NTreeNode } from "./commonLibs";

xdescribe('leetcode 590: n Tree PostOrderTraversal', () => {
    function nTreePostorderTraversal(root: NTreeNode | null): number[] {
        const result: number[] = [];

        postorder(root, result);
        return result;
    };

    function postorder(root: NTreeNode | null, result: number[]) {
        if (!root) {
            return;
        }

        for(const child of root.children) {
            postorder(child, result);
        }

        result.push(root.val);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


