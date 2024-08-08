import { Queue } from '../commonLibs';

xdescribe('leetcode 211: search and find', () => {
    class TrieNode {
        public char: string = '';
        public children: TrieNode[] = [];
        public end: boolean = false;

        constructor(char: string, children: TrieNode[], end: boolean) {
            this.char = char;
            this.children = children;
            this.end = end;
        }
    }

    class WordDictionary {
        private root: TrieNode[] = [];

        constructor() {}

        addWord(word: string): void {
            let temp = this.root;

            for (let i = 0; i < word.length; i++) {
                const currChar = word[i];
                const foundMatching = temp.find((t) => t.char === currChar);

                if (foundMatching) {
                    if (i === word.length - 1) {
                        foundMatching.end = true;
                    }

                    temp = foundMatching.children;
                } else {
                    temp.push(new TrieNode(word[i], [], i === word.length));

                    if (!temp.find((t) => t.char === '.')) {
                        // push one for . matching
                        temp.push(new TrieNode('.', [], i === word.length));
                    }
                }
            }
        }

        search(word: string): boolean {
            let temp = this.root;
            let foundMatching: TrieNode | undefined = undefined;
            for (let i = 0; i < word.length; i++) {
                foundMatching = temp.find((t) => t.char === word[i]);
                if (foundMatching) {
                    temp = foundMatching.children;
                } else {
                    return false;
                }
            }

            return !!foundMatching?.end;
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
