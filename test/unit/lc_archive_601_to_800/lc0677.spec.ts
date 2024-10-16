xdescribe('leetcode 677: description', () => {
    // map apple: 3=> 
    // a:3 ap:3 app:3: appl:3 apple:3
    // app:2
    // a:5 ap: 5 app: 5

    class MapSum {
        prefixMap = new Map<string, number>();

        constructor() {   
        }
    
        insert(key: string, val: number): void {
            let prefix = '';
            for(let i = 0; i < key.length; i++) {
                prefix+=key[i];
                this.prefixMap.set(prefix, (this.prefixMap.get(prefix) || 0) + val);
            }
        }
    
        sum(prefix: string): number {
            return this.prefixMap.get(prefix) || 0;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
