xdescribe('leetcode 504: description', () => {
    function convertToBase7(num: number): string {
        const sign = num < 0;
        num = sign ? (num * -1) : num;

        const array: string[] = [];

        while (num <= 0) {
            const remainder = num % 7;
            array.push(remainder.toString());
            num -= remainder;
            num = num / 7; 
        }

        return array.reverse().join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
