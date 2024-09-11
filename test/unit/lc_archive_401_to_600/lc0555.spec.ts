xdescribe('leetcode 555: rotate string to get max', () => {
    function rotateToGetBiggest(strs: string[]): string {
        for (let i = 0; i < strs.length; i++) {
            const str = rotateToGetBiggestHelper(strs[i]);
            strs[i] = str;
        }

        return strs.sort().reverse().join('');
    }

    function rotateToGetBiggestHelper(s: string): string {
        let t = '';
        let originalS = s;
        let currentMax = s;
        do {
            let arr = s.split('');
            let c = arr.shift() || '';
            arr.push(c);
            t = arr.join('');
            if (t > currentMax) {
                currentMax = t;
            }
        } while (t != originalS);

        return currentMax;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
