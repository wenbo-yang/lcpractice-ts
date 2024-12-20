xdescribe('leetcode 1175: prime arrangements', () => {
    function numPrimeArrangements(n: number): number {
        // [1, 2] => 1
        // [1 3 2] [1 2 3] => 2
        // [1 2 3 4] [1 3 2 4][4 3 2 1][4 2 3 1] => 4 (2 prime numbers, 2 non prime numbers)
        //  => 3 prime numbers and 2 non prime => 3! * 2!
        let numberOfPrimes = 0;
        for (let i = 1; i <= n; i++) {
            if (isPrime(i)) {
                numberOfPrimes++;
            }
        }

        let nonPrimeNumbers = n - numberOfPrimes;

        const primeArrangement = new Array<number>(numberOfPrimes).fill(0).map(k => numberOfPrimes--).reduce((a,b) => a*b);
        const nonPrimeArrangement = new Array<number>(n - numberOfPrimes).fill(0).map(k => nonPrimeNumbers--).reduce((a,b) => a*b);

        return primeArrangement * nonPrimeArrangement;
    }; 

    function isPrime(n: number): boolean {
        if (n === 1) {
            return false;
        }

        if (n === 2) {
            return true;
        }

        let max = Math.floor(Math.sqrt(n));
        let curr = 2;
        while (curr <= max) {
            if (n % curr++ === 0) {
                return false;
            } 
        }
        
        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
