xdescribe('leetcode 264: description', () => {
    function nthUglyNumber(n: number): number {
        const current = [1]

        for (let i = 1; i < n; i++) {
            const next = getNext(current)
        }

        return current[current.length - 1];
    };

    function getNext(current: number[]) {
        // [1, 2, 3, 4, 5, 6,] 
        //  
        let l = 0;
        let r = current.length - 1;
        const min2 = getNextHelper(l, r, current, 2);
        const min3 = getNextHelper(l, r, current, 3);
        const min5 = getNextHelper(l, r, current, 5);
        current.push(Math.min(min2, min3, min5));
    }


    // find the pivot such that current[p] * target > current.last && current[(p - 1)] * target < current.last
    function getNextHelper(l: number, r: number, current: number[], factor: number, ): number {
        if (l > r ) {
            return factor * current[current.length - 1];
        }

        const pivot = Math.floor((r + l) / 2)

        if (current[pivot] * factor > current[current.length - 1] && (current[pivot - 1] || 0) * factor <= current[current.length - 1]) {
            return current[pivot] * factor;
        }

        if (current[pivot] * factor <= current[current.length - 1]) {
            return getNextHelper(pivot + 1, r, current, factor);
        }

        return getNextHelper(l, pivot, current, factor); 
    }

    it('test case 1 Input: n = 2, output 12 ', () => {
        expect(nthUglyNumber(10)).toEqual(12);
    });
});




