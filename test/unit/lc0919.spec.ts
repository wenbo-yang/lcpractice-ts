import { Queue, TreeNode } from './commonLibs';

xdescribe('leetcode 919: complete binary tree inserter', () => {
    class CBTInserter {
        private nonFullNodeQueue: (TreeNode | null)[] = [];
        private index: number = 0;
        private root: TreeNode | null = null;
    
        constructor(root: TreeNode | null) {
            this.root = root;
            this.levelTrace(this.root);
        }
    
        insert(val: number): number {
            while (this.isFullNode(this.nonFullNodeQueue[this.index])) {
                this.index++;
            }

            const curr = this.nonFullNodeQueue[this.index];
            const newNode = new TreeNode(val);
            if (curr) {
                if (curr.left) {
                    curr.right = newNode;
                }
                else {
                    curr.left = newNode;
                }
            }

            this.nonFullNodeQueue.push(newNode);
            return val;
        }
    
        getRoot(): TreeNode | null {
            return this.root;
        }

        private levelTrace(root: TreeNode | null) {
            const temp: (TreeNode | null) [] = [root];
            let index = 0;
            while(index < temp.length) {
                const curr = temp[index++];
                if (curr?.left) temp.push(curr.left);
                if (curr?.right) temp.push(curr.right);
            }

            for (const c of temp) {
                if (this.isFullNode(c)) {
                    continue;
                }
                else {
                    this.nonFullNodeQueue.push(c);
                }
            }
        }

        private isFullNode(treeNode: TreeNode | null): boolean {
            return !!(treeNode && treeNode.left && treeNode.right);
        } 
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



