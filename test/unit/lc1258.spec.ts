xdescribe('leetcode 1258: synonymous sentences', () => {
    const wordToId: Record<string, number> = {};
    const words: string[] = [];

    const parent: number[] = [];
    const rank: number[] = [];

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); 
        }
        return parent[x];
    }

    
    function unite(a: number, b: number): void {
        let parentA = find(a);
        let parentB = find(b);
        if (parentA !== parentB) {
            if (rank[parentA] > rank[parentB]) {
            parent[parentB] = parentA;
            rank[parentA] += rank[parentB];
            } else {
            parent[parentA] = parentB;
            rank[parentB] += rank[parentA];
            }
        }
    }

    function generateSentences(synonyms: string[][], text: string): string[] {
        const synonymSet: Set<string> = new Set();

        synonyms.flat().forEach((word) => {
            synonymSet.add(word);
            if (!wordToId[word]) {
            wordToId[word] = words.length;
            words.push(word);
            const id = words.length - 1;
            parent[id] = id; 
            rank[id] = 1; 
            }
        });

        synonyms.forEach(([word1, word2]) => {
            unite(wordToId[word1], wordToId[word2]);
        });

        const groups: number[][] = Array.from({ length: words.length }, () => []);
        Object.keys(wordToId).forEach((word) => {
            groups[find(wordToId[word])].push(wordToId[word]);
        });

        groups.forEach((group) => {
            group.sort((a, b) => words[a].localeCompare(words[b]));
        });

        const sentenceWords: string[] = text.split(' ');
        const resultSentences: string[] = [];
        let tempSentence: string[] = [];

        const generate = (i: number) => {
            if (i >= sentenceWords.length) {
                const sentence = tempSentence.join(' ');
                resultSentences.push(sentence);
                return;
            }
            const currentWord = sentenceWords[i];
            if (!wordToId[currentWord]) {
                tempSentence.push(currentWord);
                generate(i + 1);
                tempSentence.pop();
            } else {
                const synonymsGroup = groups[find(wordToId[currentWord])];
                synonymsGroup.forEach((id) => {
                    tempSentence.push(words[id]);
                    generate(i + 1);
                    tempSentence.pop();
                });
            }
        };

        generate(0);
        return resultSentences;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
