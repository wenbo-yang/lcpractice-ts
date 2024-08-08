xdescribe('leetcode 293: flip game', () => {
    function generatePossibleNextMoves(currentState: string): string[] {
        const sArray = currentState.split('');
        const ans: string[] = [];
        for (let i = 0; i < sArray.length - 1; ++i) {
            if (sArray[i] == '+' && sArray[i + 1] == '+') {
                sArray[i] = '-';
                sArray[i + 1] = '-';
                ans.push(sArray.join(''));
                sArray[i] = '+';
                sArray[i + 1] = '+';
            }
        }

        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
