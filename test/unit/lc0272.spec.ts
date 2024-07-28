import {MaxHeap, TreeNode} from './commonLibs';

xdescribe('leetcode 272: closest k values', () => {
    function closestKValuesInBinarySearchTree(root: TreeNode | null, targetValue: number, k: number): number[] {
        const comparator = function (a: {diff: number, value: number}, b: {diff: number, value: number}) {
            if (a.diff - b.diff > 0) return 1; 
            if (a.diff - b.diff < 0) return -1;
            return 0;
        }

        const maxHeap = new MaxHeap<{diff: number, value: number}>(comparator);

        findClosestKValuesHelper(root, targetValue, k, maxHeap);

        const result: number[] = [];
        
        while(maxHeap.length > 0) {
            const top = maxHeap.pop();
            result.push(top.value);
        }

        return result;
    }

    function findClosestKValuesHelper(root: TreeNode | null, targetValue: number, k: number, maxHeap: MaxHeap<{ diff: number; value: number; }>) {
        if (!root) {
            return;
        }

        const val = root.val;
        if (maxHeap.length < k) {
            maxHeap.push({diff: Math.abs(val - targetValue), value: val});
        }
        else if (maxHeap.length === k) {
            const top = maxHeap.peek();
            if (Math.abs(val - targetValue) < top.diff) {
                maxHeap.pop();
                maxHeap.push({diff: Math.abs(val - targetValue), value: val});
            }
        }

        findClosestKValuesHelper(root.left, targetValue, k, maxHeap);
        findClosestKValuesHelper(root.right, targetValue, k, maxHeap);
    }
    

    function closestKValuesInBinarySearchTreeDfs(root: TreeNode | null, targetValue: number, k: number): number[] {

        const bstArray: number[] = [];

        inorderTraversal(root, bstArray);

        return bstArray.slice(bstArray.length - k);
    }

    function inorderTraversal(root: TreeNode | null, bstArray: number[]) {
        if(!root) {
            return;
        }

        inorderTraversal(root.left, bstArray);
        bstArray.push(root.val);
        inorderTraversal(root.right, bstArray);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



