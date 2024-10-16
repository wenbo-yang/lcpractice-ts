xdescribe('leetcode num: description', () => {
    function minSteps(n: number): number {
        if (n < 2) {
            return 0;
        }

        if (n < 4) {
            return n;
        }

        // A
        // AA => copy paste
        // A AA => copy paste paste 
        //           A   AA   AAA
        // AAAA => copy paste copy paste
        //           A    AA   AA    AAAA
        // AAAAA  => copy paste paste paste paste 
        //            A    AA    AAA   AAAA  AAAAA
        // AAAAAA => copy paste paste copy paste
        //             A    AA    AAA  AAA  AAAAAA
        // AAAAAAA => copy paste paste paste paste paste paste

        let index = 0;
        const minStepsArray = new Array<number>(n + 1).fill(index++);
        // AA 
        minStepsArray[1] = 0;
        minStepsArray[2] = 2;
        minStepsArray[3] = 3;
        
        for (let i = 4; i < n; i++) {
            const factor = getLargestFactor(i);
            if (factor < i) {
                const base = minStepsArray[factor];
                const paste = i / factor - 1;
                const copy = 1;
                minStepsArray[i] = base + copy + paste;
            }            
        }

        return minStepsArray[n];
    };

    function getLargestFactor(p: number) {
        let r = Math.floor(p/2);
        while(r >= Math.sqrt(p)) {
            if (p % r === 0) {
                return r;
            } 
            r = r--;
        }

        return p;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
