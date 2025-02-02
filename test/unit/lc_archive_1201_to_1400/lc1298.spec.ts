xdescribe('leetcode 1298: maximum candies you can get from boxes', () => {
    function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
        let totalCandies = 0;
        const numBoxes = status.length;
        const hasBox = new Array<boolean>(numBoxes).fill(false);
        const openedBox = new Array<boolean>(numBoxes).fill(false);
        const openableBoxes: number[] = [];

        
        for (const boxId of initialBoxes) {
            hasBox[boxId] = true;
            if (status[boxId] === 1) {
            totalCandies += candies[boxId]; 
            openedBox[boxId] = true; 
            openableBoxes.push(boxId); 
            }
        }
        while (openableBoxes.length > 0) {
            const currentBoxId = <number>openableBoxes.shift();

            for (const key of keys[currentBoxId]) {
                status[key] = 1;
                if (hasBox[key] && !openedBox[key]) {
                    totalCandies += candies[key];
                    openedBox[key] = true;
                    openableBoxes.push(key);
                }
            }

            for (const containedBox of containedBoxes[currentBoxId]) {
                hasBox[containedBox] = true;
                if (status[containedBox] === 1 && !openedBox[containedBox]) {
                    totalCandies += candies[containedBox];
                    openedBox[containedBox] = true;
                    openableBoxes.push(containedBox);
                }
            }
        }

        return totalCandies;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
