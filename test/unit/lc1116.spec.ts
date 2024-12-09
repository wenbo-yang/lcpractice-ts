xdescribe('leetcode 1116: description', () => {
    const n: number = 5;
    let isZeroTurn = true;
    let isOddTurn = true;
    
    const printNumber = async (num: number) => {
      console.log(num);
    };
    
    const zero = async () => {
      for (let i = 0; i < n; ++i) {
        while (!isZeroTurn) await new Promise(resolve => setTimeout(resolve, 10));
        await printNumber(0);
        isOddTurn = i % 2 === 0;
        isZeroTurn = false;
      }
    };
    
    const even = async () => {
      for (let i = 2; i <= n; i += 2) {
        while (isZeroTurn || isOddTurn) await new Promise(resolve => setTimeout(resolve, 10));
        await printNumber(i);
        isZeroTurn = true;
      }
    };
    const odd = async () => {
      for (let i = 1; i <= n; i += 2) {
        while (isZeroTurn || !isOddTurn) await new Promise(resolve => setTimeout(resolve, 10));
        await printNumber(i);
        isZeroTurn = true;
      }
    };
    


    it('test case 1 Input:, target = 5, output 2 ', async () => {
      await zero();
      await even();
      await odd();
    });
});
