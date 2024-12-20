xdescribe('leetcode 1189: description', () => {
    function maxNumberOfBalloons(text: string): number {
        const ballon = new Array<number>(26).fill(0);
        "ballon".split('').forEach(c => ballon[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);

        const textCount = new Array<number>(26).fill(0);
        text.split('').forEach(c => textCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);

        let max = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < 26; i++) {
            if (ballon[i] !==0) {
                max = Math.min(max, Math.floor(textCount[i]/ballon[i]));
            }
        }

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
