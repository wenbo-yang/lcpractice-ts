xdescribe('leetcode 1146: snapshot array', () => {
    class SnapshotArray {
        private snapshotIndex: number = 0;
        private snapshotArray: Array<Array<[number, number]>> = [];

        constructor(length: number) {
            this.snapshotIndex = 0;
            this.snapshotArray = new Array(length).fill(null).map(() => []);
        }
    
        set(index: number, val: number): void {
            const changes = this.snapshotArray[index];
            changes.push([this.snapshotIndex, val]);
        }
    
        snap(): number {
            return this.snapshotIndex++;
        }
    
        get(index: number, snapId: number): number {
            const changes = this.snapshotArray[index];
            let left = 0;
            let right = changes.length;
          
            while (left < right) {
                const mid: number = (left + right) >> 1;
                if (changes[mid][0] > snapId) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
          
            
            return left === 0 ? 0 : changes[left - 1][1];
        }
    }    
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
