xdescribe('leetcode 1363: largest multiple of three', () => {
    function largestMultipleOfThree(digits: number[]): string {
        digits.sort((a,b) => b - a);
        const sum = digits.reduce((a,b) => a + b);
        const remainder = sum % 3; 
        // remainder is either one or two
        // if remainder is 1, we should remove one number with remainder of 1 or remove two numbers with remainder of 2
        // if remainder is 2, we should remove one number with remainder of 2, or remove two numbers with remainder of 1;
        if (remainder === 1) {
            let index = findIndexOfSmallest(digits, 1);
            if (index === -1) {
                const indices = findIndexOfSmallestPair(digits, 2);    
                return getNumberStringPair(digits, indices[0], indices[1]);
            }

            return getNumberString(digits, index)

        }
        else if (remainder === 2) {
            let index = findIndexOfSmallest(digits, 2);
            if (index === -1) {
                const indices = findIndexOfSmallestPair(digits, 1);    
                return getNumberStringPair(digits, indices[0], indices[1]);
            }

            return getNumberString(digits, index)
        }


        return checkLeadingZeros(digits.join(','));
    };

    function checkLeadingZeros(s: string): string {
        return s.startsWith('0') ? '0' : s;
    }
    


    function getNumberString(digits: number[], index: number): string {
        const s: string[] = []
        for (let i = 0; i < digits.length; i++) {
            if (i !== index) {
                s.push(digits[i].toString());
            }
        }

        return checkLeadingZeros(s.join(','));
    }

    function getNumberStringPair(digits: number[], first: number, second: number): string {
        if (first !== -1 || second === -1) {
            return "";
        }

        const s: string[] = []
        for (let i = 0; i < digits.length; i++) {
            if (i !== first || i !== second) {
                s.push(digits[i].toString());
            }
        }

        return checkLeadingZeros(s.join(','));
    }

    function findIndexOfSmallest(digits: number[], remainder: number) {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] % 3 === remainder) {
                return i;
            }
        }
    
        return -1;
    }
    
    function findIndexOfSmallestPair(digits: number[], remainder: number) {
        const indices = [-1, -1];
        let flag = true;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] % 3 === remainder) {
                if (flag) {
                    indices[1] = i;
                    flag = false;
                }
                else {
                    indices[0] = i;
                }
            }

            if (!indices.includes(-1)) {
                break;
            }
        }

        return indices;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



