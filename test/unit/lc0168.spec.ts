xdescribe('leetcode 168: excel column title', () => {
    function convertToTitle(columnNumber: number): string {
        const titleArray: string[] = [];
        while (columnNumber > 26) {
            const remainder = columnNumber % 26;
            columnNumber = (columnNumber - remainder) / 26;
            titleArray.push(String.fromCharCode('A'.charCodeAt(0) + remainder - 1));
        }

        titleArray.push(String.fromCharCode('A'.charCodeAt(0) + columnNumber - 1));

        return titleArray.reverse().join('');
    }

    it('test case 1 Input:1000, output ALL ', () => {
        expect(convertToTitle(1000)).toEqual('ALL');
    });

    it('test case 2 Input:28, output AB ', () => {
        expect(convertToTitle(28)).toEqual('AB');
    });

    it('test case 3 Input:701, output ZY ', () => {
        expect(convertToTitle(701)).toEqual('ZY');
    });
});
