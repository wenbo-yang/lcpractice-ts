xdescribe('leetcode 1358: number of substrings containing all three characters', () => {
    function numberOfSubstrings(s: string): number {
        // i, j, if i + j contains abc, then i - 1, j, i j+1 and i - 1, j + 1
        // [f, f, f, f]
        // [f, f, f, f]
        // [f, f, f, f]
        // [f, f, f, f]
        const mem = new Map<string, string>();
        let result = initializeDf(mem, s);
        
        let length = 3;
        while (length < s.length) {
            const keys = mem.keys();
            for (const key of keys) {
                let [i,j] = key.split(',').map(s => Number(s));
                if (i !== 0 ) {
                    let missing = mem.get(key) || '';
                    missing.replace(s[i -1], '');

                    mem.set([i - 1, j].join(), missing);
                    if (missing === '') {
                        result++;
                    }
                }

                if (j !== s.length - 1) {
                    let missing = mem.get(key) || '';
                    missing.replace(s[j + 1], '');

                    mem.set([i, j + 1].join(), missing);
                    if (missing === '') {
                        result++;
                    }
                }
            
                mem.delete(key);
            }

            length++;
        }

        return result;
    };
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

function initializeDf(mem: Map<string, string>, s: string): number {
    let initialSet = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let missing = '';
        missing += (![s[i], s[i + 1], s[i + 2]].includes('a')) ? 'a' : '';
        missing += (![s[i], s[i + 1], s[i + 2]].includes('b')) ? 'b' : '';
        missing += (![s[i], s[i + 1], s[i + 2]].includes('c')) ? 'c' : '';

        if (missing === '') {
            initialSet++;
        }

        mem.set([i, i+2].join(), missing);
    }

    return initialSet;
}

