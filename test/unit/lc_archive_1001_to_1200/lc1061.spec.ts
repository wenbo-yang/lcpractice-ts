xdescribe('leetcode 1061: lexigraphically smallest equivalent string', () => {
    function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
        const parent: number[] = Array.from({ length: 26 }, (_, i) => i);
        for (let i = 0; i < s1.length; ++i) {
            const charIndex1 = s1.charCodeAt(i) - 'a'.charCodeAt(0);
            const charIndex2 = s2.charCodeAt(i) - 'a'.charCodeAt(0);
            union(charIndex1, charIndex2, parent);
          }
        
          let result = "";
          for (const c of baseStr) {
            const smallestEquivalentCharacter = String.fromCharCode(find(c.charCodeAt(0) - 'a'.charCodeAt(0), parent) + 'a'.charCodeAt(0));
            result += smallestEquivalentCharacter;
          }
        
          return result;
    };

    function find(x: number, parent: number[]): number {
        if (parent[x] !== x) {
          parent[x] = find(parent[x], parent);
        }
        return parent[x];
    }
      
    function union(charIndex1: number, charIndex2: number, parent: number[]): void {
        const parent1 = find(charIndex1, parent);
        const parent2 = find(charIndex2, parent);
        if (parent1 < parent2) {
            parent[parent2] = parent1;
        } else {
            parent[parent1] = parent2;
        }
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
