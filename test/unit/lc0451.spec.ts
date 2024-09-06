xdescribe('leetcode 451: description', () => {
    function frequencySort(s: string): string {
        const map = new Map<string, string[]>();

        for (const c of s) {
            const sameCharArray = map.get(c) || [];
            sameCharArray.push(c);
            map.set(c, sameCharArray);
        }

        const array = Array.from(map.entries()).sort((a, b) => a[1].length - b[1].length);

        return array.map((entry) => entry[1].join()).join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
