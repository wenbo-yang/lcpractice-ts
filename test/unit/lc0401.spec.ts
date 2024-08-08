xdescribe('leetcode 401: ', () => {
    function readBinaryWatch(turnedOn: number): string[] {
        const ans: string[] = [];
        for (let i = 0; i <= turnedOn; ++i)
            for (let h of nums(i, 12))
              for (let m of nums(turnedOn - i, 60))
                ans.push(h.toString() + (m < 10 ? ":0" : ":") + m.toString());
          return ans;
    };

    function nums(b: number, r: number): number[] {    
        const ans: number[] = [];
        for (let n = 0; n < r; ++n)
          if (count1s(n) === b) ans.push(n);
        return ans;
    }
    
    function count1s(n: number): number {
        let count = 0;
        while(n !== 0) {
            if ((n & 1) === 1) {
                count++;
            }
            n = n >> 1 
        }
        return count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


