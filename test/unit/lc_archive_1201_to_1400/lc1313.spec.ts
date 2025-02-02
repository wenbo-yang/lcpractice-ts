xdescribe('leetcode 1313: decompress run-length encoded list', () => {
    function decompressRLElist(nums: number[]): number[] {
        const decompressed: number[] = [];

        let l = 0;

        while (l < nums.length) {
            let freq = nums[l++];
            const num = nums[l++];

            while(freq > 0) {
                decompressed.push(num);
                freq--;
            }
        }

        return decompressed;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
