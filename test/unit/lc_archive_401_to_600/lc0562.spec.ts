xdescribe('leetcode 562: description', () => {
    function longestLineOfConsecutiveOnes(mat: number[][]): number {
        const result: { h: number; v: number; d: number; a: number } = { h: 0, v: 0, d: 0, a: 0 };
        const visited = new Array<Array<{ h: boolean; v: boolean; d: boolean; a: boolean }>>(mat.length).fill([]).map((r) => new Array<{ h: boolean; v: boolean; d: boolean; a: boolean }>().fill({ h: false, v: false, d: false, a: false }));
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (mat[i][j] === 1) {
                    const curr = { h: 0, v: 0, d: 0, a: 0 };
                    determineOnes(mat, i, j, curr, visited, result);
                }
            }
        }

        return Math.max(result.a, result.d, result.h, result.v);
    }

    function determineOnes(mat: number[][], i: number, j: number, curr: { h: number; v: number; d: number; a: number }, visited: { h: boolean; v: boolean; d: boolean; a: boolean }[][], result: { h: number; v: number; d: number; a: number }) {
        if (!visited[i][j].h) {
            visited[i][j].h = true;
            curr.h++;
            goHorizontally(mat, i, j + 1, curr, visited, result);
        }

        if (!visited[i][j].v) {
            visited[i][j].v = true;
            curr.v++;
            goVertically(mat, i + 1, j, curr, visited, result);
        }

        if (!visited[i][j].d) {
            visited[i][j].d = true;
            curr.d++;
            goDiagnally(mat, i + 1, j + 1, curr, visited, result);
        }

        if (!visited[i][j].a) {
            visited[i][j].a = true;
            curr.a++;
            goAntiDiagnally(mat, i - 1, j - 1, curr, visited, result);
        }
    }

    function goHorizontally(mat: number[][], i: number, j: number, curr: { h: number; v: number; d: number; a: number }, visited: { h: boolean; v: boolean; d: boolean; a: boolean }[][], result: { h: number; v: number; d: number; a: number }) {
        if (outOfBound(mat, i, j) || visited[i][j].h) {
            return;
        }

        result.h = Math.max(curr.h, result.h);
        curr.h++;
        visited[i][j].h = true;
        goHorizontally(mat, i, j + 1, curr, visited, result);
    }

    function goVertically(mat: number[][], i: number, j: number, curr: { h: number; v: number; d: number; a: number }, visited: { h: boolean; v: boolean; d: boolean; a: boolean }[][], result: { h: number; v: number; d: number; a: number }) {
        if (outOfBound(mat, i, j) || visited[i][j].v) {
            return;
        }

        result.v = Math.max(curr.v, result.v);
        curr.v++;
        visited[i][j].v = true;
        goHorizontally(mat, i + 1, j, curr, visited, result);
    }

    function goDiagnally(mat: number[][], i: number, j: number, curr: { h: number; v: number; d: number; a: number }, visited: { h: boolean; v: boolean; d: boolean; a: boolean }[][], result: { h: number; v: number; d: number; a: number }) {
        if (outOfBound(mat, i, j) || visited[i][j].d) {
            return;
        }

        result.d = Math.max(curr.d, result.d);
        curr.d++;
        visited[i][j].d = true;
        goHorizontally(mat, i + 1, j + 1, curr, visited, result);
    }

    function goAntiDiagnally(mat: number[][], i: number, j: number, curr: { h: number; v: number; d: number; a: number }, visited: { h: boolean; v: boolean; d: boolean; a: boolean }[][], result: { h: number; v: number; d: number; a: number }) {
        if (outOfBound(mat, i, j) || visited[i][j].a) {
            return;
        }

        result.a = Math.max(curr.a, result.a);
        curr.a++;
        visited[i][j].a = true;
        goHorizontally(mat, i - 1, j - 1, curr, visited, result);
    }

    function outOfBound(mat: number[][], i: number, j: number) {
        return i < 0 || i >= mat.length || j < 0 || j >= mat[0].length || mat[i][j] === 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
