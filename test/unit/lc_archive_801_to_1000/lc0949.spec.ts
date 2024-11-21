xdescribe('leetcode 949: largest time of given digits', () => {
    function largestTimeFromDigits(arr: number[]): string {
        let hh = 23;
        let mm = 59;
        const hhs = new Array<string>(24).fill('').map(r => {if (hh >= 10) {return hh.toString()} else { return '0' + hh.toString()} hh--});
        const mms = new Array<string>(60).fill('').map(r => {if (mm >= 10) {return hh.toString()} else { return '0' + hh.toString()} mm--});
        arr.sort((a,b) => a - b);
        for (const hh of hhs) {
            for (const mm of mms) {
                const hhmm = hh.split('').concat(mm.split('')).map( n => Number(n)).sort((a,b) => a - b);
                let isTarget = true;
                for (let i = 0; i < 4; i++) {
                    if (hhmm[i] !== arr[i]) {
                        isTarget = false;
                        break;
                    }
                }

                if (isTarget) {
                    return hh + ':' + mm;
                }
            }
        }

        return '';
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
