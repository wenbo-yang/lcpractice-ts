import { QuadTreeNode } from './commonLibs';

xdescribe('leetcode 558: logical or of two binary grids', () => {
    function intersect(quadTree1: QuadTreeNode | null, quadTree2: QuadTreeNode | null): QuadTreeNode | null {
        return dfs(quadTree1, quadTree2);
    }

    function dfs(t1: QuadTreeNode | null, t2: QuadTreeNode | null): QuadTreeNode | null {
        if (t1 && t2) {
            if (t1.isLeaf && t2.isLeaf) {
                return new QuadTreeNode(t1.val || t2.val, true);
            }
            if (t1.isLeaf) {
                return t1.val ? t1 : t2;
            }
            if (t2.isLeaf) {
                return t2.val ? t2 : t1;
            }
            let res: QuadTreeNode | null = new QuadTreeNode();
            res.topLeft = dfs(t1.topLeft, t2.topLeft);
            res.topRight = dfs(t1.topRight, t2.topRight);
            res.bottomLeft = dfs(t1.bottomLeft, t2.bottomLeft);
            res.bottomRight = dfs(t1.bottomRight, t2.bottomRight);
            const isLeaf = res.topLeft?.isLeaf && res.topRight?.isLeaf && res.bottomLeft?.isLeaf && res.bottomRight?.isLeaf;
            const sameVal = res.topLeft?.val == res.topRight?.val && res.topRight?.val == res.bottomLeft?.val && res.bottomLeft?.val == res.bottomRight?.val;
            if (isLeaf && sameVal) {
                res = res.topLeft;
            }
            return res;
        }

        return null;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
