import { TreeNode } from '../commonLibs';

xdescribe('leetcode 508: most frequent substree sum', () => {
    function findFrequentTreeSum(root: TreeNode | null): number[] {
        const sumFrequencyMap = new Map<number, number>();

        findSumHelper(root, sumFrequencyMap);

        const array = Array.from(sumFrequencyMap).sort((a, b) => b[1] - a[1]);

        if (array.length === 0) {
            return [];
        }

        const max = array[0][1];
        const result: number[] = [];
        let i = 0;
        while (array[i][1] === max) {
            result.push(array[i++][0]);
        }

        return result;
    }

    function findSumHelper(root: TreeNode | null, sumFrequencyMap: Map<number, number>): number {
        if (!root) {
            return 0;
        }

        const left = findSumHelper(root.left, sumFrequencyMap);
        const right = findSumHelper(root.right, sumFrequencyMap);

        const sum = root.val + left + right;
        sumFrequencyMap.set(sum, (sumFrequencyMap.get(sum) || 0) + 1);

        return sum;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
