xdescribe('leetcode 1055: shortest way to form string', () => {
    function shortestWay(source: string, target: string): number {
        let sourceLength: number = source.length;
        let targetLength: number = target.length;
        let subsequencesCount: number = 0;
        let targetIndex: number = 0;
    
        while (targetIndex < targetLength) {
            let sourceIndex: number = 0;
            let subsequenceFound: boolean = false;
    
            while (sourceIndex < sourceLength && targetIndex < targetLength) {
                if (source.charAt(sourceIndex) === target.charAt(targetIndex)) {
                    subsequenceFound = true;
                    targetIndex++;
                }
                sourceIndex++;
            }
    
            if (!subsequenceFound) {
                return -1;
            }
    
            subsequencesCount++;
        }
    
        return subsequencesCount;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
