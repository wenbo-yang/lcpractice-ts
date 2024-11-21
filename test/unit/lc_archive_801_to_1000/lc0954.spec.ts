import { countBy } from "lodash";

xdescribe('leetcode 954: array of double pairs', () => {
    function canReorderDoubled(arr: number[]): boolean {
        const frequencyMap: Record<number, number> = countBy(arr);

        if (frequencyMap[0] % 2 !== 0) return false;
    
        const keys: number[] = Object.keys(frequencyMap).map(Number);
        const sortedKeys: number[] = keys.sort((a,b) => Math.abs(a) - Math.abs(b));
    
        for (const key of sortedKeys) {
            if ((frequencyMap[key * 2] || 0) < frequencyMap[key]) return false;
    
            frequencyMap[key * 2] = (frequencyMap[key * 2] || 0) - frequencyMap[key];
        }
    
        
        return true;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
