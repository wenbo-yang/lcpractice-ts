xdescribe('leetcode 1092: shortest comon supersequence', () => {
    function shortestCommonSupersequence(str1: string, str2: string): string {
        const str1Length = str1.length;
        const str2Length = str2.length;
        
        const dpMatrix = new Array(str1Length + 1).fill(0).map(() => new Array(str2Length + 1).fill(0));

        for (let i = 1; i <= str1Length; ++i) {
            for (let j = 1; j <= str2Length; ++j) {
                if (str1[i - 1] === str2[j - 1]) {
                    dpMatrix[i][j] = dpMatrix[i - 1][j - 1] + 1;
                } else {
                    dpMatrix[i][j] = Math.max(dpMatrix[i - 1][j], dpMatrix[i][j - 1]);
                }
            }
        }

        let supersequence: string[] = [];
        let i = str1Length;
        let j = str2Length;

        while (i > 0 || j > 0) {
            if (i === 0) {
                supersequence.push(str2[--j]);
            } else if (j === 0) {
                supersequence.push(str1[--i]);
            } else {
                if (dpMatrix[i][j] === dpMatrix[i - 1][j]) {
                    supersequence.push(str1[--i]);
                } else if (dpMatrix[i][j] === dpMatrix[i][j - 1]) {
                    supersequence.push(str2[--j]);
                } else {
                    supersequence.push(str1[--i]);
                    --j;
                }
            }
        }

        return supersequence.reverse().join('');
              
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
