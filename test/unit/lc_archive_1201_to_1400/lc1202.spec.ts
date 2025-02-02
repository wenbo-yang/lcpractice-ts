xdescribe('leetcode 1202: smallest swap making string', () => {
    function smallestStringWithSwaps(s: string, pairs: number[][]): string {
        const lengthOfString = s.length;
        const parent = new Array(lengthOfString).fill(0).map((_, index) => index);
    
        const findRoot = (x: number): number => {
            if (parent[x] !== x) {
                parent[x] = findRoot(parent[x]);
            }
            return parent[x];
        };
    
        const components: string[][] = new Array(lengthOfString).fill(0).map(() => []);
    
        for (const [a, b] of pairs) {
            const rootA = findRoot(a);
            const rootB = findRoot(b);
            if (rootA !== rootB) {
                parent[rootA] = rootB;
            }
        }
    
        for (let i = 0; i < lengthOfString; ++i) {
            components[findRoot(i)].push(s[i]);
        }
    
        for (const component of components) {
            component.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
        }
    
        const sortedString: string[] = [];
        for (let i = 0; i < lengthOfString; ++i) {
            sortedString.push(components[findRoot(i)].pop()!);
        }
    
        return sortedString.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
