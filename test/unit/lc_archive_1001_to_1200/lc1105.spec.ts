xdescribe('leetcode 1105: filling bookcase shelves', () => {
    function minHeightShelves(books: number[][], shelfWidth: number): number {
        const numBooks = books.length;
        const dp = new Array(numBooks + 1).fill(0);

        for (let i = 1; i <= numBooks; ++i) {
            let [currentWidth, currentHeight] = books[i - 1];
            dp[i] = dp[i - 1] + currentHeight;
            for (let j = i - 1; j > 0; --j) {
                currentWidth += books[j - 1][0];  
                if (currentWidth > shelfWidth) {
                    break;
                }
                currentHeight = Math.max(currentHeight, books[j - 1][1]);
                dp[i] = Math.min(dp[i], dp[j - 1] + currentHeight);
            }
        }

        // Return the minimum height needed to place all books
        return dp[numBooks];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
