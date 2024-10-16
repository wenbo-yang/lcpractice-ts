xdescribe('leetcode 781: description', () => {
    function numRabbits(answers: number[]): number {
        answers.sort((a,b) => a - b);

        let count = 0;
        let index = 0;
        
        while(index < answers.length) {
            const currValue = answers[index]; 
            // this is of the same color;
            if (answers[index + currValue] === answers[index]) {
                index += currValue + 1;
            }
            else {
                let temp = index + 1;
                while(answers[temp] === answers[index]) {
                    temp++;
                }
                index = temp;
            }

            count = currValue + 1;
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
