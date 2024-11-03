xdescribe('leetcode 927: three equal parts', () => {
    function threeEqualParts(arr: number[]): number[] {
        let l = 0;
        let r = arr.length - 1;
        const possibleStartingIndices: number[] = [];
        
        const prefixCount: number[] = [];
        arr.forEach(n => prefixCount.push(prefixCount[prefixCount.length - 1] + n));
        
        const target = arr.reduce((a, b) => a + b) / 3;

        while (l < r) {
            if (arr[l] === arr[arr.length - 1] && prefixCount[l] === target) {
                possibleStartingIndices.push(l);    
            }
            l++;
        }
        
        for (const c of possibleStartingIndices) {
            let l = 0;
            let r = arr.length - 1 - l;

            if (c >= r) {
                break;
            }
            else {
                while (l <= c && r < arr.length) {
                    if (arr[l] === arr[r]) {
                        l++;
                        r++;
                    }
                    else {
                        break;
                    }
                }

                if (l !== c || r !== arr.length - 1) {
                    break;
                }
                
                const nextBreak = getNextMiddle(arr, c);

                if (nextBreak === -1) {
                    break;
                }

                return [c, nextBreak];
            }
        }

        return [-1, -1];
    };

    function getNextMiddle(arr: number[], c: number): number {
        const r = arr.length - 1 - c;
        let l = 0;
        while (l <= c && arr[l] === arr[c + l]) {
            l++;
        }

        if (l === c && areLeadingZeros(arr, c+l+1,  r)) {
            return c + l;
        }

        return -1;
    }

    function areLeadingZeros(arr: number[], start: number, end: number) {
        while(start < end) {
            if (arr[start++] === 1) {
                return false;
            }
        }

        return true;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



