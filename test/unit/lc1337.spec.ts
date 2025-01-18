import { MaxHeap } from './commonLibs';

xdescribe('leetcode 1337: the k weakest rows in a matrix', () => {
    function kWeakestRows(mat: number[][], k: number): number[] {
        const maxHeap = new MaxHeap<number>();

        for (let i = 0; i < mat.length; i++) {
            const s = findWeight(mat[i]);
            maxHeap.push(s);

            while (maxHeap.length > k) {
                maxHeap.pop();
            }
        }

        return maxHeap.toArray();
    };

    function findWeight(row: number[]) {
        let l = 0;
        let r = row.length - 1;

        while (l < r) {
            let pivot = Math.floor((l + r) / 2);

            if (row[pivot] === 1 && row[pivot + 1] === 0) {
                return pivot + 1;
            }

            if (row[pivot] === 0) {
                r = pivot;
            }
            else {
                l = pivot + 1;
            }
        }

        return l;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

