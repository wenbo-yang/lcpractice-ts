xdescribe('leetcode num: description', () => {
    class MyHashMap {
        data: Array<number>;
        constructor() {
            this.data = new Array(10 ** 6 + 1).fill(-1);
        }
    
        put(key: number, value: number): void {
            this.data[key] = value;
        }
    
        get(key: number): number {
            return this.data[key];
        }
    
        remove(key: number): void {
            this.data[key] = -1;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
