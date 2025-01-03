import {MaxHeap} from './commonLibs';

xdescribe('leetcode 1299: replace elements with greatest element on the right side', () => {
    function replaceElements(arr: number[]): number[] {
        let maxElement = arr[arr.length -1];
        arr[arr.length -1] = -1;
        for (let i = arr.length - 2; i >= 0; i--) {
            let temp = arr[i];
            arr[i] = maxElement;
            maxElement = Math.max(maxElement, temp);
        }

        return arr;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
