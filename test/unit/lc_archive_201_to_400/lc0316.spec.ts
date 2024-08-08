xdescribe('leetcode 316: remove duplicate letters', () => {
    // using stack
    // using map to save first and last occurrance
    // place s[0] letter in stack 
    // place check s[1] < s[0] and s[0].lastoccurrance > i; pop else push
    function removeDuplicateLetters(s: string): string {      
        const letterCount: Map<string, number[]> = new Map<string, number[]>()
        for (let i = 0; i < s.length; i++) {
            const indices = letterCount.get(s[i]) || [];
            indices.push(i);
            letterCount.set(s[i], indices);
        }

        const result: string[] = [];
        const letters = 'abcdefghijklmnopqrstuvwxyz';

        while (letterCount.size > 0) {
            for (let i = 0; i < 26; i++) {
                if (letterCount.has(letters[i]) && canPlace(letters[i], letterCount)) {
                    place(result, letters[i], letterCount);
                }
            }
        }

        return result.join();
    }

    function canPlace(letter: string, letterCount: Map<string, number[]>): boolean {
        const indices = letterCount.get(letter) || [];
        const first = indices[0] // the smallest has to be less than subsequent biggest;

        for (let i = (letter.charCodeAt(0) - 'a'.charCodeAt(0)) + 1; i < 26; i ++) {
            const subsequentIndices = letterCount.get(String.fromCharCode('a'.charCodeAt(0) + i));
            if (subsequentIndices && subsequentIndices[subsequentIndices.length - 1] > first) {
                return true;
            }
        }

        return false;
    }

    function place(result: string[], letter: string, letterCount: Map<string, number[]>): void {
        result.push(letter);
        const indices = letterCount.get(letter) || [];
        const first = indices[0] // the smallest has to be less than subsequent biggest;
        letterCount.delete(letter);

        for (let i = 0; i < 26; i ++) {
            const targetLetter = String.fromCharCode('a'.charCodeAt(0) + i);
            const indices = letterCount.get(targetLetter) || [];
            while(indices && indices.length > 0 && indices[0] < first) {
                indices.shift();
            }
            
            if (indices.length > 0) {
                letterCount.set(targetLetter, indices);
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




