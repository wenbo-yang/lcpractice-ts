xdescribe('leetcode 779: description', () => {
    function kthGrammar(n: number, k: number): number {
        return (k - 1).toString(2).split('').filter(n => n === '1').length & 1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
