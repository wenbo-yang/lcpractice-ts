xdescribe('leetcode 1011: capacity to ship package withing d days', () => {
    function shipWithinDays(weights: number[], days: number): number {
        let lowerBound = 0;
        let upperBound = 0;

        for (const weight of weights) {
            lowerBound = Math.max(lowerBound, weight); 
            upperBound += weight;
        }


        while (lowerBound < upperBound) {
            const midCapacity = Math.floor((lowerBound + upperBound) / 2); 

            if (canShipInDays(midCapacity, weights, days)) {
                upperBound = midCapacity;
            } else {
                lowerBound = midCapacity + 1;
            }
        }

        return lowerBound;
    };


    function canShipInDays(maxCapacity: number, weights: number[], days: number): boolean {
        let currentWeightSum = 0; 
        let requiredDays = 1;    

        for (const weight of weights) {
            currentWeightSum += weight;

            if (currentWeightSum > maxCapacity) {
                currentWeightSum = weight;
                ++requiredDays;
            }
        }

        return requiredDays <= days;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
