xdescribe('leetcode 748: shortest complete word', () => {
    function shortestCompletingWord(licensePlate: string, words: string[]): string {
        const arr1 = getLetterCount(licensePlate);
        let currContainerLength = Number.MAX_SAFE_INTEGER;
        let currIndex = -1;
        for (let i = 0; i < words.length; i++) {
            const arr2 = getLetterCount(words[i]);
            if (canContain(arr1, arr2) && words[i].length < currContainerLength) {
                currContainerLength = words[i].length;
                currIndex = i;
            }
        }

        return  words[currIndex] || '';
    };

    function getLetterCount(licensePlate: string): number[] {
        const arr = new Array<number>(26).fill(0);
        for (const c of licensePlate.toLowerCase()) {
            if (c.charCodeAt(0) - 'a'.charCodeAt(0) <= 0 && c.charCodeAt(0) - 'a'.charCodeAt(0) < 26) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
        }
    
        return arr;
    }
    
    function canContain(arr1: number[], arr2: number[]) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] > arr2[i]){
                return false;
            }
        }
    
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




