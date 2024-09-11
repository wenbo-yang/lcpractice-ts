xdescribe('leetcode 567: has permutation', () => {
    // sliding window
    function checkInclusion(s1: string, s2: string): boolean {
        const s1Map = getS1Map(s1);

        const s2Map = new Array<number>(26).fill(0);
        for (let i = 0; i < s2.length; i++) {
            if (i >= s1.length) {
                s2Map[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
            }

            s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;

            if (areEqual(s1Map, s2Map)) {
                return true;
            }
        }

        return false;
    }

    function getS1Map(s1: string): number[] {
        const arr = new Array<number>(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        return arr;
    }

    function areEqual(arr1: number[], arr2: number[]) {
        let result = true;
        let index = 0;
        arr1.forEach((n) => (result = result && n === arr2[index++]));

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
