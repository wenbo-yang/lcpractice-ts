xdescribe('leetcode 1281: subtract the product and sum of digits of an integer', () => {
    function subtractProductAndSum(n: number): number {
        return n.toString().split('').map(r => Number(r)).reduce((a,b) => a*b) / n.toString().split('').map(r => Number(r)).reduce((a,b) => a+b);
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
