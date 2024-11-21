xdescribe('leetcode 838: push dominoes', () => {
    function pushDominoes(dominoes: string): string {
        const result: string[] = new Array<string>(dominoes.length).fill('.');
        let rStack: number[] = [];

        for (let i = 0; i < dominoes.length; i++) {
            if (dominoes[i] === 'R') {
                rStack.push(i);
            }
            
            if (dominoes[i] === 'L') {
                if (rStack.length) {
                    let lastR = rStack[rStack.length - 1];
                    let firstR = rStack[0];

                    for (let j = firstR; j < lastR; j++) {
                        result[j] = 'R';
                    }

                    let t = i;
                    for (let k = lastR; k <= Math.floor((i + lastR) / 2); k++) {
                        result[k] = 'R';
                        result[t--] = 'L'; 
                    }
                    rStack = [];
                }
            }
        }
        
        if (rStack.length) {
            for (let i = rStack[0]; i < dominoes.length; i++) {
                result[i] = 'R';
            }
        }

        return result.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
