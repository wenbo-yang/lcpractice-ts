xdescribe('leetcode 730: count palidrome subsequences', () => {
    function countPalindromicSubsequences(s: string): number {
        const mem = new Array<Array<number>>(s.length + 1).fill([]).map(r => new Array<number>(s.length));

        return count(s, 0, s.length - 1, mem);
    };

    function count(s: string, start: number, end: number, mem: number[][]): number {
        if (start > end) return 0;
        if (start === end ) return 1;        
        if (mem[start][end] > 0) return mem[start][end];        
        
        let ans = 0;
        if (s[start] == s[end]) {
            let l = start + 1;
            let r = end - 1;
            while (l <= r && s[l] != s[start]) ++l;
            while (l <= r && s[r] != s[start]) --r;
            if (l > r)
                ans = count(s, start + 1, end - 1, mem) * 2 + 2;
            else if (l == r)
                ans = count(s, start + 1, end - 1, mem) * 2 + 1;
            else
                ans = count(s, start + 1, end - 1, mem) * 2 
                    - count(s, l + 1, r - 1, mem);
        } else {
            ans = count(s, start, end - 1, mem)
                + count(s, start + 1, end, mem)
                - count(s, start + 1, end - 1, mem);
        }
        
        return mem[start][end] = (ans + 1000000007) % 1000000007;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


