xdescribe('leetcode 791: custom sort string', () => {
    function customSortString(order: string, s: string): string {
        const rankMap: number[] = new Array<number>(26).fill(25);
        let index = 0;
        order.split('').forEach(c => rankMap[getIndex(c)] = index++);

        return s.split('').sort((a, b) => rankMap[getIndex(a)] - rankMap[getIndex(b)]).join('');
    };

    function getIndex(c: string): number {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


