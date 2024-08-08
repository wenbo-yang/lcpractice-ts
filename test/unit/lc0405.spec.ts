xdescribe('leetcode 405: convert to hex decimal', () => {
    function toHex(num: number): string {
        const map = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        
        if (num === 0) {
            return '0'
        }

        let result = "";

        while(num !== 0) {
            result = map[num & 15] + result;
            num = num >> 4
        }

        return result
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});