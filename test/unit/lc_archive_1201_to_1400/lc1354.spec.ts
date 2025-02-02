import { MaxHeap } from "./commonLibs";

xdescribe('leetcode 1354: construct target array with multiple sums', () => {
    function isPossible(target: number[]): boolean {
        if (target.length === 1) {
            return target[0] === 1;
        }
    
        let totalSum: number = target.reduce((a, b) => a + b, 0);
        const maxHeap: MaxHeap<number> = new MaxHeap<number>();
        target.forEach(element => maxHeap.push(element) );
    
        while (maxHeap.peek() > 1) {
            const maxElement: number = maxHeap.pop();
    
            const remainingSum: number = totalSum - maxElement;
    
            if (remainingSum === 1) {
                return true;
            }
    
            const updatedElement: number = maxElement % remainingSum;
    
            if (updatedElement === 0 || updatedElement === maxElement) {
                return false;
            }
    
            maxHeap.push(updatedElement);
            totalSum = totalSum - maxElement + updatedElement;
        }
    
        return true;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
