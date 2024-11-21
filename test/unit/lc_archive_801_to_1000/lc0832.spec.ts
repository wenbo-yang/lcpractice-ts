xdescribe('leetcode 832: description', () => {
    function flipAndInvertImage(image: number[][]): number[][] {
        for (let i = 0; i < image.length; i++) {
            for (let j = 0; j < image[0].length / 2; j++) {
                const temp = image[i][image[0].length - 1 - j];
                image[i][image[0].length - 1 - j] = image[i][j];
                image[i][j] = temp;
            }
        }

        for (let i = 0; i < image.length / 2; i++) {
            for (let j = 0; j < image[0].length; j++) {
                const temp = image[i][j];
                image[i][j] = image[image.length - 1 - i][j];
                image[image.length - 1 - i][j] = temp;
            }
        }

        return image;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
