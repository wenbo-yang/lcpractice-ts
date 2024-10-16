xdescribe('leetcode 664: strange printer', () => {
    function strangePrinter(s: string): number {
        const mem = new Array<Array<number>>(s.length).fill([]).map(r => new Array<number>(s.length).fill(0));

        return strangePrinterHelper(s, 0, s.length - 1, mem);

    };

    function strangePrinterHelper(s: string, i: number, j: number, mem: number[][]): number {
        if (i > j) {
            return 0;
        }

        if (mem[i][j] > 0) {
            return mem[i][j];
        }

        mem[i][j] = strangePrinterHelper(s, i+1, j, mem) + 1;

        for (let k = i + 1; k <= j; ++k)
            if (s[k] === s[i])
              mem[i][j] = Math.min(mem[i][j], strangePrinterHelper(s, i, k - 1, mem) +
                                              strangePrinterHelper(s, k + 1, j, mem));
      
          return mem[i][j];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


