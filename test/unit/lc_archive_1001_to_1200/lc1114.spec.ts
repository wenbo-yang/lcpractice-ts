xdescribe('leetcode 1114: print in order', () => {

    let count = 1;
    let firstSecondControl: (value: void | PromiseLike<void>) => void;
    let secondThirdControl: (value: void | PromiseLike<void>) => void;

    const canRunSecond = new Promise<void>((resolve) => {
        firstSecondControl = resolve;
    });

    const canRunThird = new Promise<void>((resolve) => {
        secondThirdControl = resolve;
    });

    async function first(printFirst: () => void): Promise<void> {
        printFirst();
        count = 2;
        firstSecondControl();
    }

    async function second(printSecond: () => void): Promise<void> {
        if (count !== 2) {
            await canRunSecond;
        }
        printSecond();
        count = 3;
        secondThirdControl();
    }

    async function third(printThird: () => void): Promise<void> {
        if (count !== 3) {
            await canRunThird;
        }
        printThird();
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
