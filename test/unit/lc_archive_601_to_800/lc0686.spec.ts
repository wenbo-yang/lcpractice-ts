xdescribe('leetcode 686: repeated string', () => {
    function repeatedStringMatch(a: string, b: string): number {
        const {startIndex, endIndex, newB} = findRepeated(a, b);
        
        
        for (let i = startIndex; i < endIndex; i++) {
            if(newB[i] !== '_') {
                return -1;
            }
        }

        let numberOfRepeatedTimes =  (endIndex - startIndex) / a.length;

        if (startIndex >= a.length) {
            return -1;
        }
        let aIndex = a.length - 1;
        for (let i = startIndex - 1; i >=0; i--) {
            if (newB[i] !== a[aIndex--]) {
                return -1;
            }
        }

        numberOfRepeatedTimes++;

        if (newB.length - endIndex + 1 >= a.length) {
            return -1;
        }

        aIndex = 0;

        for(let i = endIndex; i < newB.length; i++) {
            if (newB[i] !== a[aIndex++]) {
                return -1;
            }
        }

        return ++numberOfRepeatedTimes;
    };

    function findRepeated(a: string, b: string): { startIndex: number; endIndex: number; newB: string } {
        
        const underScore = new Array<string>(a.length).fill('_').join('');
        const newB = b.replace(a, underScore);

        const startIndex = newB.indexOf('_');
        const endIndex = newB.lastIndexOf('_') + 1;

        return {startIndex, endIndex, newB};
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


