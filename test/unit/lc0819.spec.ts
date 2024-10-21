xdescribe('leetcode 819: most common word', () => {
    function mostCommonWord(paragraph: string, banned: string[]): string {
        const bannedSet = new Set<string>(banned.map(w => w.toLowerCase()));

        const map = new Map<string, number>();

        const wordArrayWithoutPunctuation = paragraph.replace('.', '').replace(',', '').replace('!','').replace('...', '').split(' ');

        for (const word of wordArrayWithoutPunctuation) {
            const wordLower = word.toLowerCase();
            if (!bannedSet.has(wordLower)) {
                map.set(wordLower, (map.get(wordLower) || 0) + 1);
            }
        }

        return Array.from(map.entries()).sort((a,b) => b[1] - a[1])[0][0];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
