xdescribe('leetcode 1115: description', () => {
    let n: number;
    let canPrintFoo: (() => void) | null = null;
    let canPrintBar: (() => void) | null = null;
    let fooPromiseResolver: (() => void) | null = null;
    let barPromiseResolver: (() => void) | null = null;
    
    function initFooBar(count: number): void {
        n = count;
        canPrintFoo = (() => {
            fooPromiseResolver = null;
            if (canPrintBar) canPrintBar();
        });
        canPrintBar = null;
    }
    
    async function foo(printFoo: () => void): Promise<void> {
        for (let i = 0; i < n; i++) {
            await new Promise<void>((resolve) => {
                fooPromiseResolver = resolve;
                if (canPrintFoo) canPrintFoo();
            });
            printFoo();
            canPrintBar = (() => {
                barPromiseResolver = null;
                if (fooPromiseResolver) fooPromiseResolver();
            });
            canPrintFoo = null;
        }
    }
    
    async function bar(printBar: () => void): Promise<void> {
        for (let i = 0; i < n; i++) {
            await new Promise<void>((resolve) => {
                barPromiseResolver = resolve;
                if (canPrintBar) canPrintBar();
            });
            printBar();
            canPrintFoo = (() => {
                fooPromiseResolver = null;
                if (barPromiseResolver) barPromiseResolver();
            });
            canPrintBar = null;
        }
    }
    
    initFooBar(3);
    foo(() => console.log('foo'));
    bar(() => console.log('bar'));

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
