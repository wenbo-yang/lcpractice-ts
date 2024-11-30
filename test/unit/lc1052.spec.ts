xdescribe('leetcode 1052: grumpy bookstore owner', () => {
    function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
        let totalUnsatisfied = 0;
        let totalCustomers = 0;
        let windowUnsatisfied = 0;
        let maxIncrease = 0;

        const n: number = customers.length;
        for (let i = 0; i < n; i++) {
            totalUnsatisfied += customers[i] * grumpy[i];
            totalCustomers += customers[i];
        }

        for (let i = 0; i < n; i++) {
            windowUnsatisfied += customers[i] * grumpy[i];
            let endTime: number = i - minutes;

            if (endTime >= 0) {
                maxIncrease = Math.max(maxIncrease, totalCustomers - (totalUnsatisfied - windowUnsatisfied));
                windowUnsatisfied -= customers[endTime] * grumpy[endTime];
            }
        }
        
        maxIncrease = Math.max(maxIncrease, totalCustomers - (totalUnsatisfied - windowUnsatisfied));
        return maxIncrease;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
