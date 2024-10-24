xdescribe('leetcode 844: back space string compare', () => {
    function backspaceCompare(s: string, t: string): boolean {
        const sArr: string[] = [];
        const tArr: string[] = [];

        for(const c of s) {
            if (c === '#') {
                sArr.pop();
            }
            else {
                sArr.push(c);
            }
        }

        for(const c of t) {
            if (c === '#') {
                tArr.pop();
            }
            else {
                tArr.push(c);
            }
        }


        return tArr.join('') === sArr.join('');
        
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
