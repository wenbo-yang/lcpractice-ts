import { Queue } from "./commonLibs";

xdescribe('leetcode 787: description', () => {
    function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
        const map = new Map<number, number[][]>();
        for (const e of flights) {
            const curr = (g.get(e[0]) || []);
            curr.push([e[1], e[2]]);
            map.set(e[0], curr);
        }
          
        
        let ans = Number.MAX_SAFE_INTEGER;
        const q = new Queue<number[]>();
        q.enque([src, 0]);
        let steps = 0;
        
        while (q.length) {
          let size = q.length;
          while (size--) {
            const top = q.pop()|| [0, 0];
            let curr = top[0];
            let cost = top[1];
  
            if (curr == dst) {
                ans = Math.min(ans, cost);
            } 
              
            for (const p of (map.get(curr) || [])) {
              if (cost + p[1] > ans) continue; // Important: prunning          
              q.enque([p[0], cost + p[1]]);
            }
          }
          if (steps++ > k) break;
        }
        
        return ans == Number.MAX_SAFE_INTEGER ? - 1 : ans;
      }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
