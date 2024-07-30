import { TreeNode } from '../commonLibs';
xdescribe('leetcode 173: description', () => {
    class BSTIterator {
        private rootStack: (TreeNode | null)[] = [];
        private root;

        constructor(root: TreeNode | null) {
            this.root = root;
        }

        next(): number | undefined {
            while (this.root) {
                this.rootStack.push();
                this.root = this.root.left;
            }

            const t: TreeNode | null = this.rootStack.pop() || null;
            this.root = t?.right || null;
            return t?.val;
        }

        hasNext(): boolean {
            return !!this.root || this.rootStack.length === 0;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
