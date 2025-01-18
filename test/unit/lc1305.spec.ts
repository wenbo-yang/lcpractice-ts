import { TreeNode } from "./commonLibs";

xdescribe('leetcode 1305: get all elements in two bsts', () => {
    function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
        const sortedList1: number[] = [];
        const sortedList2: number[] = [];
        inorderTraversal(root1, sortedList1);
        inorderTraversal(root2, sortedList2);

        return mergeTwoSortedLists(sortedList1, sortedList2);
    };

    function inorderTraversal(root: TreeNode | null, sortedList: number[]) {
        if (!root) {
            return;
        }
    
        inorderTraversal(root.left, sortedList);
        sortedList.push(root.val);
        inorderTraversal(root.left, sortedList);
    }
    
    function mergeTwoSortedLists(sortedList1: number[], sortedList2: number[]): number[] {
        const result: number[] = [];
        let l1 = 0;
        let l2 = 0;
        while (l1 < sortedList1.length || l2 < sortedList2.length) {
            if (l1 < sortedList1.length && l2 < sortedList2.length) {
                if (sortedList1[l1] < sortedList2[l2]) {
                    result.push(sortedList1[l1++]);
                }
                else {
                    result.push(sortedList2[l2++]);
                }
            }
            else {
                if (l1 < sortedList1.length) {
                    result.push(sortedList1[l1++]);
                }
                else {
                    result.push(sortedList2[l2++]);
                }
            }
        }

        return result;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



