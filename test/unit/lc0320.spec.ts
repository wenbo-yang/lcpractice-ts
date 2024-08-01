import {Queue} from './commonLibs';

xdescribe('leetcode 320: generalized abbreviations', () => {
    function generalizedAbbrev(word: string): string[] {
        
        const result: string[] = [];
        const queue = new Queue<(string | number)[]>();
        
        while (queue.length > 0) {
            const top = queue.deque();
            const currentValids = applyChanges(top);
            for (const valid of currentValids) {
                result.push(valid.join());
                queue.enque(valid);
            }
        }

        return result;
    }

    function applyChanges(top: (string | number)[] | undefined): (string | number)[][] {
        if (!top) return [];
        Array.from(top);
        const result = new Set<string>();
        let curr = Array.from(top);
        for (let i = 0; i < top.length; i++) {
            
            if (typeof curr[i] === 'number') {
                continue;
            }

            curr[i] = 1;
            result.add(collapse(curr))
            curr[i] = top[i];
        }

        return Array.from(result).map(it => it.split(',').map(c => Number(c) ? Number(c) : c));
    }
    
    function collapse(curr: (string | number)[]): string {
        throw new Error('Function not implemented.');
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




