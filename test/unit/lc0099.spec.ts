import { TreeNode } from './commonLibs';

describe('leetcode 99: recover bst', () => {
    export class RecoverTree {
        private first: TreeNode | null;
        private second: TreeNode | null;

        private prev: TreeNode | null;
        private root: TreeNode | null;
        constructor(root: TreeNode | null) {
            this.root = root;
        }

        public recoverTree() {
            this.inOrderTraversalAndFindOffendingNodes(this.root);
            this.swap();
            return this;
        }
        private swap() {
            const temp = this.first?.val;
            if (this.first) this.first.val = this.second?.val || Number.MAX_SAFE_INTEGER;
            if (this.second) this.second.val = temp || Number.MAX_SAFE_INTEGER;
        }

        private inOrderTraversalAndFindOffendingNodes(root: TreeNode | null): void {
            if (!root) return;
            this.inOrderTraversalAndFindOffendingNodes(root.left);
            if (this.prev && this.prev.val > root.val) {
                if (!this.first) this.first = this.prev;
                this.second = root;
            }
            this.prev = root;
            this.inOrderTraversalAndFindOffendingNodes(root.right);
        }
    }

    function recoverTree(root: TreeNode | null): void {}

    function findErrorNode(root): boolean;

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
