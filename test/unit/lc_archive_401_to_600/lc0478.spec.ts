xdescribe('leetcode 478: random point', () => {
    class Solution {
        private radius: number;
        private x_center: number;
        private y_center: number;
        constructor(radius: number, x_center: number, y_center: number) {
            this.radius = radius;
            this.x_center = x_center;
            this.y_center = y_center;
        }

        randPoint(): number[] {
            const rand1 = Math.random() * 2 * this.radius - this.radius;
            const rand2 = Math.sqrt(this.radius * this.radius - rand1 * rand1);

            const x_or_y = Math.floor(Math.random() * 2);

            if (x_or_y === 0) {
                return [rand1 + this.x_center, rand2 + this.y_center];
            }

            return [rand2 + this.x_center, rand1 + this.y_center];
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
