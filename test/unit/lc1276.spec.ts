xdescribe('leetcode 1276: number of burgers with no waste of ingredients', () => {
    function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
        const excessTomato: number = tomatoSlices - 2 * cheeseSlices;
        const conversionToJumbo: number = excessTomato / 2;
    
        const jumboBurgers: number = cheeseSlices - conversionToJumbo;

        if (excessTomato % 2 === 0 && jumboBurgers >= 0 && conversionToJumbo >= 0) {
            return [jumboBurgers, conversionToJumbo];
        } else {
            return [];
        }
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
