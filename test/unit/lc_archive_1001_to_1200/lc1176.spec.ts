xdescribe('leetcode 1176: diet plan performance', () => {
    function dietPlanPerformance(calories: number[], k: number, lower: number, upper: number): number {
        
        let curr = getInitialPoint(calories, k, lower, upper);
        let points = 0;

        if (curr > upper) {
            points++;
        }

        if (curr < lower) {
            points--;
        }

        for (let i = k; i < calories.length; i++) {
            curr = curr + calories[k] - calories[k - i];

            if (curr > upper) {
                points++;
            }
    
            if (curr < lower) {
                points--;
            }
        }

        return points;
    }

    function getInitialPoint(calories: number[], k: number, lower: number, upper: number) {
        let points = 0;
        for (let i = 0; i < k; i++) {
            points += calories[i];
        }


        return points;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

