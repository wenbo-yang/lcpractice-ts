xdescribe('leetcode 1309: decrypt string from alphabet to integer mapping', () => {
    function freqAlphabets(s: string): string {
        let l = 0;
        let result: string[] = [];
        while (l !== -1) {
            let r = s.indexOf('#', l);

            const arr: string[] = [];
            let upper = r;
            if (r !== -1) {
                arr.push(String.fromCharCode(Number(s[r-2] + s[r -1]) + 'a'.charCodeAt(0)));
                upper = r - 2;
            } 
            else {
                upper = s.length;
            }
            
            for (let i = l; i < upper; i++) {
                arr.push(String.fromCharCode(Number(s[i]) + 'a'.charCodeAt(0)));
            }

            l = r - 1;
            result.push(arr.reverse().join(''));
        }

        return result.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
