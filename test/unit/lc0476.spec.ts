xdescribe('leetcode 476: description', () => {
    function findComplement(num: number): number {
        let leadingZero = 0;
        let leadingZeroFlag = true;
        let result = 0;
        for (let i = 0; i < 31; i++) {
            const r = (num << 1 ) && 0xa000;

            if(r === 0 && leadingZeroFlag) {
                leadingZero++;
            }
            else {
                leadingZeroFlag = false;
            }

            if (!leadingZeroFlag) {
                result = result << 1
                result += r === 0 ? 0 : 1
            }

            num = num << 1
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
