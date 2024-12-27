

xdescribe('leetcode 1226: dinning philosophers', () => {
    class Lock {
        private _isLocked: boolean = false;
        private _waitingResolvers: Array<() => void> = [];
      
        async acquire(): Promise<void> {
          while (this._isLocked) {
            await new Promise(() => this._waitingResolvers.push(Promise.resolve));
          }
          this._isLocked = true;
        }
      
        release(): void {
          if (!this._isLocked) {
            throw new Error('Lock is already released');
          }
          this._isLocked = false;
          const resolve = this._waitingResolvers.shift();
          if (resolve) {
            resolve();
          }
        }
      }
    
    type Action = () => void;

    const forks = Array.from({ length: 5 }, () => new Lock());
    
    async function wantsToEat(
        philosopher: number,
        pickLeftFork: Action,
        pickRightFork: Action,
        eat: Action,
        putLeftFork: Action,
        putRightFork: Action
      ): Promise<void> {
        const leftForkIndex = philosopher;
        const rightForkIndex = (philosopher + 1) % 5;
      
        await Promise.all([forks[leftForkIndex].acquire(), forks[rightForkIndex].acquire()]);
      
        try {
            pickLeftFork();   // Pick up left fork
            pickRightFork();  // Pick up right fork
            eat();            // Eat
            putLeftFork();    // Put down left fork
            putRightFork();   // Put down right fork
        } finally {
            forks[leftForkIndex].release();
            forks[rightForkIndex].release();
        }
      }
      

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
