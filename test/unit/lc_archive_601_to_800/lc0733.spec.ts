xdescribe('leetcode 733: flood fill', () => {
    function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
        floodFillHelper(image, sr, sc, image[sr][sc], color);
        return image;
    };

    function floodFillHelper(image: number[][], i: number, j: number, originalColor: number, color: number) {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== originalColor) {
            return;
        }

        image[i][j] = color;

        floodFillHelper(image, i+1, j, originalColor, color);
        floodFillHelper(image, i-1, j, originalColor, color);
        floodFillHelper(image, i, j+1, originalColor, color);
        floodFillHelper(image, i, j-1, originalColor, color);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

