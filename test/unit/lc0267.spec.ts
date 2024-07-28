xdescribe('leetcode 267: palindrome permutation', () => {
    function palidromePermutation(s: string): string[] {
        const map = new Map<string, number>();
        let numberOfOddCount = 0;

        for (const c of s) {
            map.set(c, (map.get(c) || 0) + 1);

            if ((map.get(c) || 1) % 2 === 0) {
                numberOfOddCount--;
            } else {
                numberOfOddCount++;
            }
        }

        if ((s.length % 2 === 0 && numberOfOddCount === 1) || (s.length % 2 === 1 && numberOfOddCount === 0)) {
            return [];
        }

        let startChar = '';
        for (const entry of map.entries()) {
            if (entry[1] % 2 === 1) {
                map.set(entry[0], (map.get(entry[0]) || 1) - 1);
            }
        }

        const current: string[] = startChar === '' ? [] : [startChar];
        const result = new Set<string>();

        permute(map, current, result, s.length);

        return [];
    }

    function permute(map: Map<string, number>, current: string[], result: Set<string>, length: number) {
        if (current.length === length) {
            result.add(current.join(''));
            return;
        }

        for (const entry of map.entries()) {
            if (entry[1] === 0) {
                continue;
            }

            map.set(entry[0], (map.get(entry[0]) || 2) - 2);
            permute(map, [entry[0], ...current, entry[0]], result, length);
            map.set(entry[0], (map.get(entry[0]) || 0) + 2);
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
