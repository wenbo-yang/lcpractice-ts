xdescribe('leetcode 520: description', () => {
    function detectCapitalUse(word: string): boolean {
        if (word.length < 2) {
            return true;
        }

        const isFirstCapital = word[0].toLowerCase() === word[0];
        const isSecondCapital = word[1].toUpperCase() === word[1];

        if (isFirstCapital && isSecondCapital ) {
            return areSubsequentLettersAllCaps(word, 2);
        }

        if (isFirstCapital && !isSecondCapital) {
            return areSubsequentLettersAlllower(word, 2);
        }

        if (!isFirstCapital) {
            return areSubsequentLettersAlllower(word, 1);
        }

        return false;
    };

    function areSubsequentLettersAlllower(word: string, index: number) {
        if (index >= word.length) {
            return true;
        }

        return areSubsequentLettersConsistently(false, word, index);
    }

    function areSubsequentLettersAllCaps(word: string, index: number) {
        if (index >= word.length) {
            return true;
        }

        return areSubsequentLettersConsistently(true, word, index);
    }

    function areSubsequentLettersConsistently(upperOrLower: boolean, word: string, index: number): boolean {
        for (let i = 0; i< word.length; i++) {
            const c = upperOrLower ? word[i].toUpperCase() : word[i].toLowerCase();
            if (c !== word[i]){
                return false;
            }
        }
    
        return true;
    } 

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




