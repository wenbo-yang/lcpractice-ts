xdescribe('leetcode 869: description', () => {
    function reorderedPowerOf2(n: number): boolean {
        if (n === 0) {
            return false;
        }

        let nString = n.toString();
        const numOfDigits = nString.length;
        const powerOf2Candidates: Set<string> = new Set<string>();
        const upperLimit = Math.pow(10, numOfDigits);
        const lowerLimit = Math.pow(10, numOfDigits - 1);
        let base = 1;
        while(base < upperLimit) {
            if (base >= lowerLimit) {
                powerOf2Candidates.add(convertToDigitCountMap(base.toString()));
            }
            base = base * 2;
        }

        return powerOf2Candidates.has(convertToDigitCountMap(n.toString()));    
    };

    function convertToDigitCountMap(num: string): string {
        const count = new Array<number>(10).fill(0);
        for (const n of num) {
            count[Number(n.charCodeAt(0))]++;
        }

        return count.join();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





