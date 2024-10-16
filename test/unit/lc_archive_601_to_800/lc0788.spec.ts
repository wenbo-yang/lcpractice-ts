xdescribe('leetcode 788: rotated digits', () => {
    function rotatedDigits(n: number): number {
        let ans = 0;
        for (let i = 1; i <= n; ++i) {
            ans += isValid(i);
        }
            
        return ans;
    };

    function isValid(n: number): number {
        const s = n.toString();
        const t = s.split('');
        for (let i = 0; i < s.length; ++i) {
          if (s[i] === '3' || s[i] == '4' || s[i] === '7') return 0;
          else if (s[i] === '2') t[i] = '5';
          else if (s[i] === '5') t[i] = '2';
          else if (s[i] === '6') t[i] = '9';
          else if (s[i] === '9') t[i] = '6';
        }
          
        return t.join() !== s ? 1 : 0;
      }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
