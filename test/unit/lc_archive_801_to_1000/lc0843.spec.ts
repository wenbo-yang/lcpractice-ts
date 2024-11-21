xdescribe('leetcode 843: guess the word', () => {
    class Master {
         guess(word: string): number {
            throw new Error('not implemented');
         }
    }

    function findSecretWord(words: string[], master: Master) {
        for (let i = 0; i < 10; i++) {
            let guess = words[Math.floor(Math.random() * words.length)];
            let x = master.guess(guess);
            words = words.filter(w => getMatches(guess, w) === x);
        }

    };

    function getMatches(s1: string, s2: string) {
        let matches = 0;
        for (let i = 0; i < s1.length; i++)
            if (s1[i] === s2[i])
                matches++;
        return matches;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
