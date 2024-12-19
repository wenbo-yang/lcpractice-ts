xdescribe('leetcode 1195: description', () => {
    class Mutex {
        async runExclusive(fn: ()=> Promise<void>) {
            return await fn;
        } 
    }


    const lock = new Mutex();
    let current: number = 1;
    let maxNumber: number;

    const initialize = (n: number): void => {
        maxNumber = n;
        current = 1;
    };

    const fizz = async (printFizz: () => void): Promise<void> => {
        while (current <= maxNumber) {
            await lock.runExclusive(async () => {
                if (current % 3 === 0 && current % 5 !== 0) {
                    printFizz();
                    current++;
                }
            });
        }
    };

    const buzz = async (printBuzz: () => void): Promise<void> => {
        while (current <= maxNumber) {
            await lock.runExclusive(async () => {
                if (current % 5 === 0 && current % 3 !== 0) {
                    printBuzz();
                    current++;
                }
            });
        }
    };

    const fizzbuzz = async (printFizzBuzz: () => void): Promise<void> => {
        while (current <= maxNumber) {
            await lock.runExclusive(async () => {
                if (current % 15 === 0) {
                    printFizzBuzz();
                    current++;
                }
            });
        }
    };

    const number = async (printNumber: (n: number) => void): Promise<void> => {
        while (current <= maxNumber) {
            await lock.runExclusive(async () => {
                if (current % 3 !== 0 && current % 5 !== 0) {
                    printNumber(current);
                    current++;
                }
            });
        }
    };

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
