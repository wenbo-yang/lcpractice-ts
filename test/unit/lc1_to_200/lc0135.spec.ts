xdescribe('leetcode 135: candy', () => {
    function candy(ratings: number[]): number {
        const candies = new Array<number>(ratings.length).fill(1);

        for (let i = 1; i < ratings.length; i++) {
            candies[i] = ratings[i] > ratings[i - 1] ? candies[i - 1] + 1 : candies[i];
        }

        for (let i = ratings.length - 2; i >= 0; i--) {
            candies[i] = ratings[i] > ratings[i + 1] ? Math.max(candies[i], candies[i + 1] + 1) : candies[i];
        }

        return candies.reduce((a, b) => a + b);
    }

    it('test case 1 Input: ratings = [1,0,2], output 5', () => {
        const ratings = [1, 0, 2];
        const result = candy(ratings);

        expect(result).toEqual(5);
    });
});
