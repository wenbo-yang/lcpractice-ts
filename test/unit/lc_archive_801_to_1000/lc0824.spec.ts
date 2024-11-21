xdescribe('leetcode 824: goat latin', () => {
    function toGoatLatin(sentence: string): string {
        return sentence
        .split(' ') 
        .map((word, index) => { // Transform each word.
            let transformedWord: string;
            if (/[aeiouAEIOU]/.test(word[0])) {
                transformedWord = word; 
            } else {
                transformedWord = word.slice(1) + word[0];
            }

            return `${transformedWord}ma${'a'.repeat(index + 1)}`;
        })
        .join(' '); // Reassemble the sentence.
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
