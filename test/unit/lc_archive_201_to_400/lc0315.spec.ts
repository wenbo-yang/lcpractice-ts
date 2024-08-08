xdescribe('leetcode 315: count number of number after self', () => {
    // binarySearchTree
    class BSTNode {
        public val: number;
        public count: number;
        public leftCount: number;
        public left: BSTNode | null;
        public right: BSTNode | null;    

        constructor(val: number) {
            this.val = val;
            this.count = 1;
            this.leftCount = 0;
            this.left = null;
            this.right = null;
        } 
        
        public lessOrEqual() { 
            return this.count + this.leftCount; 
        }
    };

    function countSmaller(nums: number[]): number[] {
        if (nums.length === 0) {
            return [];
        }

        nums.reverse();
        const root = new BSTNode(nums[0]);
        const result: number[] = [];
        for (let i = 1; i < nums.length; i++) {
            result.push(insert(root, nums[i]));
        }

        return result.reverse();
    }

    function insert(root: BSTNode, val: number): number {
        if (root.val == val) {
            ++root.count;
            return root.leftCount;
        } 
        else if (val > root.val) {
            root.leftCount++;
            if (!root.left) {
                root.left = new BSTNode(val);            
                return 0;
            } 
            return insert(root.left, val);
        } 
        else  {
            if (!root.right) {
                root.right = new BSTNode(val);
                return root.lessOrEqual();
            }
            return root.lessOrEqual() + insert(root.right, val);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
