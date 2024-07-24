import { Queue } from "./commonLibs";

xdescribe('leetcode 239: sliding window maximum', () => {

    class MonotonicQueue {
        push(e: number): void {
            while(this.data.length > 0 && e > (this.data.last || Number.MIN_SAFE_INTEGER)) {
                this.data.pop();
            }
            this.data.enque(e);
        } 
        
        pop(): void {
            this.data.deque();
        }
          
        max(): number { 
            return (this.data.peek() || NaN);
        }

        data: Queue<number> = new Queue() ;
    }

    function maxSlidingWindow(nums: number[], k: number): number[] {
        const queue: MonotonicQueue = new MonotonicQueue();
        const ans: number[] = [];
            
        for (let i = 0; i < nums.length; i++) {
          queue.push(nums[i]);
          if (i - k + 1 >= 0) {
            ans.push(q.max());
            if (nums[i - k + 1] == q.max()) q.pop();
          }      
        }

        return ans;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
