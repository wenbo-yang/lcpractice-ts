xdescribe('leetcode 424: longest repeating character resplacement', () => {
    function characterReplacement(s: string, k: number): number {
        let l = 0;
        let r = 0;
        let max = 0;
        const charCount = new Array<number>(26).fill(0);

        do {
            addToCharCount(charCount, s, r++);

            if(!isOtherCountGreaterThanK(charCount, k)) {
                max = Math.max(r - l, max);
            }
            else {
                l = reduceWindowUntilOtherCountSmallerEqualsToK(charCount, s, l, k);
            }
        } while (r < s.length);


        return max;
    };


    function addToCharCount(charCount: number[], s: string, index: number) {
        charCount[s[index].charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    function isOtherCountGreaterThanK(charCount: number[], k: number) {
        let max = 0;
        let maxIndex = 0;

        for(let i = 0; i < charCount.length; i++) {
            if ( charCount[i] > max) {
                maxIndex = i;
                max = charCount[i];
            }
        }

        let otherCount = 0;
        for (let i = 0; i < charCount.length; i++) {
            otherCount += ((i === maxIndex) ? 0 : charCount[i]);
        }

        return otherCount > k;
    }


    function reduceWindowUntilOtherCountSmallerEqualsToK(charCount: number[], s: string, l: number, k: number): number {
        while(isOtherCountGreaterThanK(charCount, k)) {
            charCount[s[l++].charCodeAt(0) - 'A'.charCodeAt(0)]--;
        }

        return l;
    }

    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







