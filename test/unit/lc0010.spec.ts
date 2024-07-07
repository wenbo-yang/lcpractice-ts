xdescribe('leetcode 10: regular expression matching', () =>{
    function isMatch(s: string, p: string): boolean {
        let pIndex = 0;
        let sIndex = 0;
        while(sIndex < s.length) {
            if (p.charAt(pIndex) === '.') {
                pIndex++;
                sIndex++;
                continue;
            }

            if (p.charAt(pIndex) === '*') {
                if (p.charAt(pIndex - 1) === '.' || p.charAt(pIndex - 1) === s.charAt(sIndex)) {
                    sIndex++;
                    continue;    
                }
                else {
                    pIndex++;
                }
            }

            if ((p.charAt(pIndex) !== '.' && p.charAt(pIndex) !== '*') && s.charAt(sIndex) !== p.charAt(pIndex)) {
                if (p.charAt(pIndex + 1) === '*') {
                    pIndex += 2;
                    continue;
                }
                else {
                    return false;
                }
            }

            if (s.charAt(sIndex) === p.charAt(pIndex)) {
                pIndex++;
                sIndex++;
                console.log(`here ${sIndex}, ${pIndex}, ${p.charAt(pIndex)}`)
                continue;
            }
        }

        if (p.charAt(pIndex) === '*') {
           pIndex++;
        }

        while (pIndex < p.length) {
            if (p.charAt(pIndex) !== '*'  && p.charAt(pIndex + 1) === '*') {
                pIndex += 2;
                continue;
            } 
            else {
                console.log(`here ${sIndex}, ${pIndex}, ${p.charAt(pIndex)}`)
                return false;
            }
        }

        return true;
    };

    // it('test case 1 s = "aa", p = "a", Output: false', () =>{
    //     const output = isMatch('aa', 'a');
    //     expect(output).toBeFalsy();
    // });

    // it('test case 2 Input: s = "aa", p = "a*"', () =>{
    //     const output = isMatch('aa', 'a*');
    //     expect(output).toBeTruthy();
    // });

    // it('test case 3 s = "ab", p = ".*", Output: true', () =>{
    //     const output = isMatch('ab', '.*');
    //     expect(output).toBeTruthy();
    // });

    it('test case 4 s = "abc", p = ".*c", Output: true', () =>{
        const output = isMatch('abc', '.*c');
        expect(output).toBeTruthy();
    });

    // it('test case 5 s = "aab", p = "c*a*b", Output: true', () =>{
    //     const output = isMatch('aab', 'c*a*b');
    //     expect(output).toBeTruthy();
    // });

    // it('test case 6 s = "mississippi", p = "mis*is*ip*.", Output: true', () =>{
    //     const output = isMatch('mississippi', 'mis*is*ip*.');
    //     expect(output).toBeTruthy();
    // });

    // it('test case 6 s = "ab", p = ".*c", Output: false', () =>{
    //     const output = isMatch('ab', '.*c');
    //     expect(output).toBeFalsy();
    // });
});