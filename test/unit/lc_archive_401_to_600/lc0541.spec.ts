xdescribe('leetcode 541: description', () => {
    function reverseStr(s: string, k: number): string {
        const array = s.split('');
        let offset = 0;

        while (offset * 2 * k < array.length) {
            let startIndex = offset * 2 * k;
            reverseHelper(array, startIndex, k);
            offset++;
        }

        return array.join('');
    }

    function reverseHelper(array: string[], startIndex: number, k: number) {
        let l = startIndex;
        let r = startIndex + k - 1 < array.length ? startIndex + k - 1 : array.length - 1;
        while (l < r) {
            const t = array[l];
            array[l] = array[r];
            array[r] = t;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
