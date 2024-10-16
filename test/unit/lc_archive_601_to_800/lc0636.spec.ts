xdescribe('leetcode 636: exculsive time of functions', () => {
    function exclusiveTime(n: number, logs: string[]): number[] {
        const result = new Array<number>(n).fill(0);
        let action = '';
        let fid: number = 0;
        let curr: number = 0;
        let prev: number = 0;    
        const s: number[] = [];
        for (const log of logs) {
          const splits = log.split(':');
          fid = Number(splits[0]);
          action = splits[1];
          curr = Number(splits[2]);

          if (action === 'start') {
            if (s) {
                result[s[s.length - 1]] += curr - prev;
            }
            s.push(fid);
            prev = curr;
          } else {
            result[s[s.length - 1]] += curr - prev + 1;
            s.pop();
            prev = curr + 1;
          }
        }
        return result;
    };


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
