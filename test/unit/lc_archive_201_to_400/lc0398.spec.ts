xdescribe('leetcode 398: random pick indices', () => {
    class Solution {
        private numToIndicesMap = new Map<number, number[]>()
        constructor(nums: number[]) {
            this.parse(nums);
        }

        private parse(nums: number[]) {
            for (let i = 0; i < nums.length; i++) {
                const indices = this.numToIndicesMap.get(nums[i]) || [];
                indices.push(i);
                this.numToIndicesMap.set(nums[i], indices);
            }
        }
    
        public pick(target: number): number {
            const indices = this.numToIndicesMap.get(target);

            if (!indices) {
                throw new Error('not found');
            }

            return indices[Math.floor(Math.random() * indices.length)]
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});