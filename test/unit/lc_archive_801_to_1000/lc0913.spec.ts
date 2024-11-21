xdescribe('leetcode 913: cat and mouse', () => {
    function catMouseGame(graph: number[][]): number {
        const HOLE = 0;
        const MOUSE_START = 1;
        const CAT_START = 2;
        const MOUSE_TURN = 0;
        const CAT_TURN = 1;
        const MOUSE_WIN = 1;
        const CAT_WIN = 2;
        const DRAW = 0;

        const nodesCount = graph.length;
        const result: number[][][] = Array.from({ length: nodesCount }, () =>
            Array.from({ length: nodesCount }, () => Array(2).fill(DRAW))
        );

        const degrees: number[][][] = graph.map((neighbors, mousePos) =>
            neighbors.map((_, catPos) => [
                graph[mousePos].length,
                catPos === HOLE ? 0 : graph[catPos].length - graph[HOLE].length
            ])
        );

        const getPrevStates = (mousePos: number, catPos: number, turn: number): number[][] => {
            let previousStates: number[][] = [];
            const prevTurn = turn ^ 1; 
            if (prevTurn === CAT_TURN) {
                graph[catPos].forEach((prevCatPos) => {
                    if (prevCatPos !== HOLE) {
                        previousStates.push([mousePos, prevCatPos, prevTurn]);
                    }
                });
            } else {
                graph[mousePos].forEach((prevMousePos) => {
                    previousStates.push([prevMousePos, catPos, prevTurn]);
                });
            }
            return previousStates;
        };

        const statesQueue: number[][] = [];

        for (let i = 1; i < nodesCount; ++i) {
            result[0][i].fill(MOUSE_WIN);
            statesQueue.push([0, i, MOUSE_TURN], [0, i, CAT_TURN]);

            result[i][i].fill(CAT_WIN);
            statesQueue.push([i, i, MOUSE_TURN], [i, i, CAT_TURN]);
        }

        while (statesQueue.length > 0) {
            const [mousePos, catPos, turn] = statesQueue.shift() as number[];
            let currResult = result[mousePos][catPos][turn];

            getPrevStates(mousePos, catPos, turn).forEach(([prevMousePos, prevCatPos, prevTurn]) => {
                if (result[prevMousePos][prevCatPos][prevTurn] === DRAW) {
                    let isWin = (currResult === MOUSE_WIN && prevTurn === MOUSE_TURN) ||
                                (currResult === CAT_WIN && prevTurn === CAT_TURN);
                    if (isWin) {
                        result[prevMousePos][prevCatPos][prevTurn] = currResult;
                        statesQueue.push([prevMousePos, prevCatPos, prevTurn]);
                    } else {
                        if (--degrees[prevMousePos][prevCatPos][prevTurn] === 0) {
                            result[prevMousePos][prevCatPos][prevTurn] = currResult;
                            statesQueue.push([prevMousePos, prevCatPos, prevTurn]);
                        }
                    }
                }
            });
        }

        return result[MOUSE_START][CAT_START][MOUSE_TURN];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
