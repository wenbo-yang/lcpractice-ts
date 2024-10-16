xdescribe('leetcode 744: description', () => {
    function nextGreatestLetter(letters: string[], target: string): string {
        let l = 0;
        let r = letters.length - 1;
        while (l < r) {
            let pivot = Math.floor((l + r) / 2);
            if (letters[pivot] < target) {
                l = pivot + 1;
            }
            else {
                r = pivot;
            }
        }

        while (l < letters.length && letters[l] === target) {
            l++;
        }

        if ( l === letters.length) {
            return letters[0];
        }
      
        return letters[l];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
