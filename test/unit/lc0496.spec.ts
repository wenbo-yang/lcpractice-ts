xdescribe('leetcode 496: next greater element', () => {
    function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        const s : number[] = [];
        const next = new Map<number, number>();
        for (let num of nums2) {
            while (s.length !==0 && num > s[s.length - 1]) {
                next.set(s[s.length -1], num);
                s.pop();
            }
            s.push(num);
        }
        
        const ans: number[] = [];
        for (const num of nums1) {
            ans.push(next.has(num) ? next[num] : -1);
        }

        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
