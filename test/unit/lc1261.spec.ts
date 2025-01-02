import {TreeNode} from './commonLibs';

xdescribe('leetcode 1261: find elements in a contaminated binary tree', () => {
    class FindElements {        
        private values = new Set<number>();
        private root: TreeNode | null = null;

        constructor(root: TreeNode | null) {    
            this.root = root;
            this.recoverTree();
        }
    
        find(target: number): boolean {
            return this.values.has(target);
        }

        private recoverTree() {
            if (!this.root) {
                throw new Error('root not initialized');
            }
            
            if (this.root.val === 0) {
                return;
            }

            this.recoverTreePreorderTraversal(this.root, 0);
        }
        
        private recoverTreePreorderTraversal(root: TreeNode | null, assignedValue: number) {
            if (!root) {
                return;
            }
        
            root.val = assignedValue;

            this.values.add(assignedValue);
        
            this.recoverTreePreorderTraversal(root.left, assignedValue * 2 + 1);
            this.recoverTreePreorderTraversal(root.right, assignedValue * 2 + 2);
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
