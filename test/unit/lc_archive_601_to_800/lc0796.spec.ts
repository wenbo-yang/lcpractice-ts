xdescribe('leetcode 796: rotate string', () => {
    function rotateString(s: string, goal: string): boolean {
        
        let shifted = s;

        do {
            if (shifted === goal) {
                return true;
            }

            const arr = shifted.split('');
            const c = arr.shift() || '';
            arr.push(c);
            shifted = arr.join('');
        }
        while (shifted !== s);

        return false;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
