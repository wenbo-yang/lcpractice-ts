
xdescribe('leetcode 710: random pick', () => {
    class Solution {
        d = new Map<number, number>();
        k: number = 0;
        constructor(n: number, blacklist: number[]) {
            this.k = n - blacklist.length;
            let i = this.k;
            const black = new Set<number>();
            for (const b of blacklist) {
                black.add(b);
            }
            for (const b of blacklist) {
                if (b < this.k) {
                    while (black.has(i)) {
                        ++i;
                    }
                    this.d.set(b, i++);
                }
            }
        }
    
        pick(): number {
            const rand = Math.floor(Math.random() * this.k);
            return this.d.get(rand) || rand;
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
