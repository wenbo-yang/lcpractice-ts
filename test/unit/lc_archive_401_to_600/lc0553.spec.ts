xdescribe('leetcode 553: maximum division', () => {
    function optimalDivision(nums: number[]): string {
        if (nums.includes(0) && nums[0] !== 0) {
            return 'Invalid';
        }

        if (nums.length < 3) {
            nums.join('/');
        }

        return optimalDivisionHelper(nums, '', true).expression;
    }

    function optimalDivisionHelper(nums: number[], currentStringTemplate: string, maxOrMin: boolean): { value: number; expression: string } {
        if (nums.length === 2) {
            return { value: nums[0] / nums[1], expression: currentStringTemplate.replace('_/_', nums[0].toString() + '/' + nums[1].toString()) };
        }

        let limit = maxOrMin ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        let currentExpression = '';
        for (let i = 0; i < nums.length - 2; i++) {
            const nume = getNumerator(nums, i);
            let currentStringTemplate = generateStringTemplate(nums, i);
            const dino = optimalDivisionHelper(getDinoArray(nums, i), currentStringTemplate, !maxOrMin);

            if (maxOrMin && nume / dino.value > limit) {
                limit = nume / dino.value;
                currentExpression = currentStringTemplate.replace('_/_', dino.expression);
            }
            if (!maxOrMin && nume / dino.value < limit) {
                limit = nume / dino.value;
                currentExpression = currentStringTemplate.replace('_/_', dino.expression);
            }
        }

        return { value: limit, expression: currentExpression };
    }

    function getNumerator(nums: number[], i: number): number {
        let current = nums[i] * nums[i];
        for (let k = 0; k <= i; k++) {
            current = current / nums[k];
        }

        return current;
    }

    function generateStringTemplate(nums: number[], i: number) {
        let template = '';
        for (let k = 0; k <= i; i++) {
            template += nums[k].toString() + '/';
        }

        return template + '(_/_)';
    }

    function getDinoArray(nums: number[], i: number): number[] {
        return nums.slice(i + 1);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
