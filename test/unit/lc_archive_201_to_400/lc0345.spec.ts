xdescribe('leetcode 345: description', () => {
    function reverseVowels(s: string): string {
        const sArray = s.split('');

        let l = 0;
        let r = sArray.length - 1;

        const vowels = ['a', 'e', 'i', 'o', 'u'];
        while (l < r) {
            if (!vowels.includes(sArray[l])) {
                l++;
                continue;
            }

            if (!vowels.includes(sArray[r])){
                r--;
                continue;
            }

            swap(l, r, sArray);

            l++;
            r--;
        }

        return sArray.join();
    };

    function swap(l: number, r: number, sArray: string[]) {
        const temp = sArray[l];
        sArray[l] = sArray[r];
        sArray[r] = temp
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


