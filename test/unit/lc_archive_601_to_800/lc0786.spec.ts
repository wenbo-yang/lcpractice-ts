import { MaxHeap } from "./commonLibs";

xdescribe('leetcode 786: description', () => {
    function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
        arr.sort((a, b) => a - b);
        const maxHeap = new MaxHeap<number>();

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = arr.length -1; j > i; j--) {
                if (maxHeap.length >= k) {
                    if (arr[i]/arr[j] < maxHeap.peek()) {
                        maxHeap.pop();
                        maxHeap.push(arr[i]/arr[j]);
                    }
                    else {
                        break;
                    }
                }
                else {
                    maxHeap.push(arr[i]/arr[j]);
                }
            }
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
