xdescribe('leetcode 660: image smoother', () => {
    function imageSmoother(img: number[][]): number[][] {
        const newImage = new Array<Array<number>>(img.length).fill([]).map(r => r = new Array<number>(img[0].length).fill(0));
        
        for(let i = 0; i < img.length; i++) {
            for (let j = 0; j < img[0].length; j++) {
                newImage[i][j] = calculateTargetValue(img, i, j);
            }
        }

        return newImage;
    };

    function calculateTargetValue(img: number[][], i: number, j: number): number {
        const values = getSelfAndNeighbors(img, i, j);

        const length = values.length;

        return Math.floor(values.reduce((a,b) => a + b) / length);
    }

    function getSelfAndNeighbors(img: number[][], i: number, j: number): number[] {
        const result: number[] = [img[i][j]];

        if (isInBound(img, i + 1, j)) {
            result.push(img[i + 1][j]);
        }
        if (isInBound(img, i - 1, j)) {
            result.push(img[i - 1][j]);
        }
        if (isInBound(img, i, j + 1)) {
            result.push(img[i][j + 1]);
        }
        if (isInBound(img, i, j - 1)) {
            result.push(img[i][j - 1]);
        }
        if (isInBound(img, i + 1, j + 1)) {
            result.push(img[i + 1][j + 1]);
        }
        if (isInBound(img, i + 1, j - 1)) {
            result.push(img[i + 1][j - 1]);
        }
        if (isInBound(img, i - 1, j + 1)) {
            result.push(img[i - 1][j + 1]);
        }
        if (isInBound(img, i - 1, j - 1)) {
            result.push(img[i - 1][j - 1]);
        }

        return result;
    }

    function isInBound(img: number[][], i: number, j: number) {
        return i >= 0 && i < img.length && j >= 0 && j < img[0].length;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

