xdescribe('leetcode 691: stickers', () => {
    function minStickersHelperminStickers(stickers: string[], target: string): number {
        const targetArray = transformIntoCharCountArray(target);

        const min = minStickersHelper(stickers, targetArray, 0);

        return min === Number.MAX_SAFE_INTEGER ? -1 : min;
    };


    function minStickersHelper(stickers: string[], targetArray: number[], currentCount: number): number {
        if (isEmpty(targetArray)) {
            return currentCount;
        }

        let min = Number.MAX_SAFE_INTEGER;
        for (const s of stickers) {
            const copy = Array.from(targetArray);

            if (hasOverLapping(s, copy)) {
                reduceTargetArray(s, copy);
                min = Math.min(minStickersHelper(stickers, copy, currentCount+1), min);
            }
        }


        return min;
    }

    function isEmpty(targetArray: number[]) {
        return targetArray.find(t => t !== 0) === undefined;
    }


    function hasOverLapping(s: string, targetArray: number[]): boolean {
        for(const c of s) {
            if (targetArray[getIndex(c)] !== 0) {
                return true;
            }
        }

        return false;
    }


    function transformIntoCharCountArray(target: string): number[] {
        const newArray = new Array<number>(26).fill(0);
        
        for(const c of target) {
            newArray[getIndex(c)]++;
        }

        return newArray;
    }

    function getIndex(c: string) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    function reduceTargetArray(s: string, targetArray: number[]) {
        for(const c of s) {
            if (targetArray[getIndex(c)] !== 0) {
                targetArray[getIndex(c)]--;
            }
        }
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





