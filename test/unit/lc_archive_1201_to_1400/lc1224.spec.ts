xdescribe('leetcode 1224: max equal frequency', () => {
    function maxEqualFreq(nums: number[]): number {
        const length = nums.length;
        const frequencyMap = new Map<number, number>();
      
        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
        }
        
        for (let index = length - 1; index > 0; index--) {
            for (const key of frequencyMap.keys()) {
                
                frequencyMap.set(key, frequencyMap.get(key)! - 1);
    
                let frequency = 0; 
                for (const value of frequencyMap.values()) {
                    if (value !== 0) {
                        frequency = value;
                        break;
                    }
                }
    
                let isValid = true;
                let sum = 1; 
    
                for (const value of frequencyMap.values()) {
                    if (value !== 0 && value !== frequency) {
                        isValid = false;
                        break;
                    }
                    sum += value; 
                }
    
                if (isValid) {
                    return sum;
                }
    
                frequencyMap.set(key, frequencyMap.get(key)! + 1);
            }
    
            frequencyMap.set(nums[index], frequencyMap.get(nums[index])! - 1);
        }
    
        
        return 1;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
