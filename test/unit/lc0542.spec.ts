import { Queue } from './commonLibs';

xdescribe('leetcode 542: zero one matrix', () => {
    function updateMatrix(mat: number[][]): number[][] {
        let index = 0;
        const distanceMat = new Array<Array<number>>(mat.length).fill([]).map((r) => new Array<number>().fill(0));

        const queue = new Queue<{ r: number; c: number; d: number }>();

        for (let r = 0; r < mat.length; r++) {
            for (let c = 0; c < mat[0].length; c++) {
                if (mat[r][c] === 1 && isPerimeter(mat, r, c)) {
                    queue.enque({ r, c, d: 1 });
                }
            }
        }

        while (queue.length) {
            const top = queue.deque();

            if (top) {
                distanceMat[top.r][top.c] = top.d;
                const neighbors = getValidNeighbors(mat, top.r, top.c, distanceMat);

                for (const nb of neighbors) {
                    queue.enque({ r: nb[0], c: nb[1], d: top.d + 1 });
                }
            }
        }

        return distanceMat;
    }

    function getValidNeighbors(mat: number[][], r: number, c: number, distanceMat: number[][]): number[][] {
        const validNeighbors: number[][] = [];
        if ((mat[r + 1] || [])[c] === 1 && !isPerimeter(mat, r + 1, c) && (distanceMat[r + 1] || [])[c] === 0) {
            validNeighbors.push([r + 1, c]);
        }

        if ((mat[r - 1] || [])[c] === 1 && !isPerimeter(mat, r - 1, c) && (distanceMat[r - 1] || [])[c] === 0) {
            validNeighbors.push([r - 1, c]);
        }

        if ((mat[r] || [])[c + 1] === 1 && !isPerimeter(mat, r, c + 1) && (distanceMat[r] || [])[c + 1] === 0) {
            validNeighbors.push([r, c + 1]);
        }

        if ((mat[r] || [])[c - 1] === 1 && !isPerimeter(mat, r, c - 1) && (distanceMat[r] || [])[c - 1] === 0) {
            validNeighbors.push([r, c - 1]);
        }

        return validNeighbors;
    }

    function isPerimeter(mat: number[][], r: number, c: number) {
        return (mat[r + 1] || [])[c] === 0 || (mat[r - 1] || [])[c] === 0 || (mat[r] || [])[c + 1] === 0 || (mat[r] || [])[c - 1] === 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
