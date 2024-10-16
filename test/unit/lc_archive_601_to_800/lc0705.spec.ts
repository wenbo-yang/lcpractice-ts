xdescribe('leetcode 705: description', () => {
    class MyHashSet {
        data: Array<boolean>;
        constructor() {
            this.data = new Array(10 ** 6 + 1).fill(false);
        }
    
        add(key: number): void {
            this.data[key] = true;
        }
    
        remove(key: number): void {
            this.data[key] = false;
        }
    
        contains(key: number): boolean {
            return this.data[key];
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
