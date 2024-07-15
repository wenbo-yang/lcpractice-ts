xdescribe('leetcode 151: reverse string', () => {
    function reverseWords(s: string): string {
        let l = 0;
        let r = s.length - 1;

        const array = s.split(' ');
        while (l < r) {
            if (array[r] === '') {
                r--;
                continue;
            }

            if (array[l] === '') {
                l++;
                continue;
            }

            const temp: string = array[l];
            array[l] = array[r];
            array[r] = temp;
        }

        return array.join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
