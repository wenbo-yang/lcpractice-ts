xdescribe('leetcode 638: shopping offers', () => {
    function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
        // 1   0, 1, 2 ,3, 4 currentMin
        // 1   2 x [1, 1, 2], [needs - [2, 2]], currentPurchase =   
        // 2

        const mem = new Map<string, number>();
        return shoppingOffersHelper(price, special, needs, mem);
    };


    function shoppingOffersHelper(price: number[], special: number[][], needs: number[], mem: Map<string, number>) {
        if (mem.has(toKey(needs))) {
            return mem.get(toKey(needs)) || Number.MAX_SAFE_INTEGER;
        }
        let index = 0;
        let currentMin = price.map(p => p * needs[index++]).reduce((a,b) => a + b);

        for (const s of special) {
            let index = 0;
            const p = needs.map(n => n - s[index++]);
            if (p.findIndex(i => i < 0) === -1) {
                currentMin = Math.min(currentMin, s[s.length - 1] + shoppingOffersHelper(price, special, needs, mem));
            }
        }

        mem.set(toKey(needs), currentMin);

        return currentMin;
    }

    function toKey(needs: number[]): string {
        return needs.join();
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





