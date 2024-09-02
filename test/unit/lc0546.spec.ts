xdescribe('leetcode 546: remove boxes', () => {
    function removeBoxes(boxes: number[]): number {
        const mem = new Map<string, number>();

        const result = countScoresHelper(boxes, 0, mem);

        return result;
    };

    function countScoresHelper(boxes: number[], prevScore: number, mem: Map<string, number>) {
        if (boxes.length === 0) {
            return prevScore;
        }

        const key = toKey(boxes, prevScore);
        if (mem.has(key)) {
            return mem.get(key) || 0;
        }

        let startIndex = 0;
        let max = 0;
        while (startIndex < boxes.length) {
            const count = getContinuesRange(boxes, startIndex);
            const currScore = prevScore + count * count;
            const newBoxes = formNewBoxesArray(boxes, startIndex, count);
            
            max = Math.max(max, countScoresHelper(newBoxes, currScore, mem));

            startIndex += count;
        }

        mem.set(key, max);

        return max;
    }

    function getContinuesRange(boxes: number[], startIndex: number) {
        let count = 1;
        while(boxes[startIndex++] === boxes[startIndex]) {
            count++;
        }

        return count;
    }

    function formNewBoxesArray(boxes: number[], startIndex: number, count: number) {
        const start = boxes.slice(0, startIndex);
        const end = boxes.slice(startIndex + count);

        return start.concat(end);
    }


    function toKey(boxes: number[], prevScore: number): string {
        return boxes.join() + '_' + prevScore;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







