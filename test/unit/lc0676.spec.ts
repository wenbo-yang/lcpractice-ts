xdescribe('leetcode 676: magic dictionary', () => {
    class MagicDictionary {
        map = new Map<string, Set<string>>();
        constructor() {
        }
    
        buildDict(dictionary: string[]): void {
            for (const w of dictionary) {
                for(let i = 0; i < w.length; i++) {
                    const arr = w.split('');
                    arr[i]='*';
                    const key = arr.join('');
                    const currentSet = this.map.get(key) || new Set<string>();
                    currentSet.add(w[i]);
                    this.map.set(key, currentSet);
                }
            }
        }
    
        search(searchWord: string): boolean {
            for(let i = 0; i < searchWord.length; i++) {
                const arr = searchWord.split('');
                arr[i] = '*';
                const key = arr.join('');
                if (this.map.has(key) && !(this.map.get(key) || new Set()).has(searchWord['i'])) {
                    return true;
                }
            }

            return false;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
