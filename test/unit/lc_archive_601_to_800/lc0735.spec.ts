xdescribe('leetcode 735: description', () => {
    function asteroidCollision(asteroids: number[]): number[] {
        const reverse: number[] = [];
        let prev = 0;
        for(let i = asteroids.length - 1; i >= 0; i--) {
            const curr = asteroids[i] + prev;
            if (curr > 0) {
                reverse.push(asteroids[i]);
                prev = 0;
            }
            else {
                prev = curr === 0 ? 0 : asteroids[i];
            }
        }

        return reverse.reverse();

    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
