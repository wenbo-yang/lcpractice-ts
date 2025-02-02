xdescribe('leetcode 1397: find all good strings', () => {
    function findGoodStrings(n: number, s1: string, s2: string, evil: string): number {
        let length = evil.length;
        const dp = Array<Array<Array<number>>>(n).fill([]).map(n => new Array<number[]>(length).fill([]).map(n => new Array<number>(4).fill(-1)));
        
        const transfers = new Array<number[]>(length).fill([]).map(n => new Array<number>(26).fill(-1));
        
        const fails = new Array<number>(length).fill(0);
        for (let i = 1; i < length; i++) {
            let state = fails[i - 1];
            while (state > 0 && evil.charAt(state) != evil.charAt(i)) {
                state = fails[state - 1];
            }
                
            if (evil.charAt(state) == evil.charAt(i)) {
                fails[i] = state + 1;
            }
        }
        return depthFirstSearch(n, s1, s2, evil, dp, transfers, fails, 0, 0, 3);
    };

    function depthFirstSearch(n: number, s1: string, s2: string, evil: string, dp: number[][][], transfers: number[][], fails: number[], index: number, state: number, bound: number) {
        const MODULO = 1000000007;
        let length = evil.length;
        if (state == length)
            return 0;
        if (index == n)
            return 1;
        if (dp[index][state][bound] >= 0)
            return dp[index][state][bound];
        dp[index][state][bound] = 0;
        let low = ((bound & 1) > 0) ? s1.charAt(index) : 'a';
        let high = ((bound & 2) > 0) ? s2.charAt(index) : 'z';
        for (let c = low; c <= high; ) {
            let nextState = getTransfer(evil, transfers, fails, state, c);
            let nextBound = 0;
            if ((bound & 1) > 0 && c == s1.charAt(index))
                nextBound++;
            if ((bound & 2) > 0 && c == s2.charAt(index))
                nextBound += 2;
            dp[index][state][bound] = (dp[index][state][bound] + depthFirstSearch(n, s1, s2, evil, dp, transfers, fails, index + 1, nextState, nextBound)) % MODULO;

            c = String.fromCharCode((c.charCodeAt(0) + 1));
        }
        return dp[index][state][bound];
    }

    function getTransfer(evil: string, transfers: number[][], fails: number[], state: number, letter: string) {
        let letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0);
        if (transfers[state][letterIndex] >= 0)
            return transfers[state][letterIndex];
        while (state > 0 && evil.charAt(state) != letter)
            state = fails[state - 1];
        let transfer = evil.charAt(state) == letter ? state + 1 : 0;
        transfers[state][letterIndex] = transfer;
        return transfer;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
