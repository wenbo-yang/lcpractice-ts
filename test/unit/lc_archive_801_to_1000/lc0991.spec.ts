xdescribe('leetcode 991: broken calculator', () => {
    function brokenCalc(startValue: number, target: number): number {
        let operationCount = 0;
  
        while (startValue < target) {
            if (target % 2 === 1) {
                target++;
            }
            else {
                target /= 2;
            }
    
            operationCount++;
        }
    
        operationCount += startValue - target;
    
        return operationCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
