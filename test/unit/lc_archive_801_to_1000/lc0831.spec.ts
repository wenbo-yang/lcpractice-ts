xdescribe('leetcode 831: description', () => {
    function maskPII(s: string): string {
        if (isEmailAddress(s)) {
            const arr = s.split('@');
            return (arr[0][0] + '*****' + arr[0][arr[0].length - 1] + '@' + arr[1]).toLowerCase();
        }

        if (isPhoneNumber(s)) {
            return '***-***-' + s.substring(s.length - 4);
        }

        return s;
    };

    function isPhoneNumber(s: string): boolean {
        return !Number.isNaN(Number(s.replace('(','').replace(')','').replace('+', '').replace('-','')));
    }

    function isEmailAddress(s: string) {
        return s.indexOf('@') !== -1 && s.lastIndexOf('.') > s.indexOf('@') && s.lastIndexOf('.') !== s.length - 1;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



