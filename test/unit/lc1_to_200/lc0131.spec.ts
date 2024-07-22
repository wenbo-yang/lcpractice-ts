xdescribe('leetcode 131: palindrome partitioning', () => {
    function partition(s: string): string[][] {
        const result: string[][] = [];
        const currentPartitioning: string[] = [];

        partitionHelperDFS(s, 0, currentPartitioning, result);

        return result;
    }

    function partitionHelperDFS(s: string, partitionIndex: number, currentPartitioning: string[], result: string[][]) {
        if (partitionIndex >= s.length) {
            result.push([...currentPartitioning]);
            return;
        }

        for (let i = partitionIndex; i <= s.length; i++) {
            const substring = s.slice(partitionIndex, i);

            if (isPalindrome(substring)) {
                currentPartitioning.push(substring);
                partitionHelperDFS(s, i, currentPartitioning, result);
                currentPartitioning.pop();
            }
        }
    }

    function isPalindrome(substring: string) {
        if (!substring) {
            return false;
        }

        let l = 0;
        let r = substring.length - 1;

        while (l < r) {
            if (substring[l] !== substring[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

    it('test case 1 Input: s = "aab", output 2 [["a","a","b"],["aa","b"]]', () => {
        const s = 'aab';
        const result = partition(s);

        expect(result).toEqual([
            ['a', 'a', 'b'],
            ['aa', 'b'],
        ]);
    });
});
