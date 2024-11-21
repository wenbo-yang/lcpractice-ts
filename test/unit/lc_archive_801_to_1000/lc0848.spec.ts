xdescribe('leetcode 848: description', () => {
    function shiftingLetters(s: string, shifts: number[]): string {
        const sum = new Array<number>(shifts.length).fill(0);
        let current = 0
        const arr: string[] = new Array<string>(s.length).fill('');
        for (let i = shifts.length - 1; i >= 0; i--) {
            current = current + shifts[i];
            arr[i] = String.fromCharCode((s[i].charCodeAt(0) + current)%26);
        } 

        return arr.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
