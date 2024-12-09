xdescribe('leetcode 1093: statistics from a large sample', () => {
    function sampleStats(count: number[]): number[] {
        const min = count.findIndex(c => c > 0);
        const max = 255 - count.reverse().findIndex(c => c > 0);
        let index = 0;
        const average = count.map(c => index++ * c).reduce((a,b) => a + b)/ count.reduce((a,b) => a + b);

        index = 1;
        const cumulativeCount = count.map(c => c + (count[index++ - 1] || 0));

        //  0, 1, 2 ,3  4  5  6, 7  8 
        // [0, 0, 2, 4, 5, 5, 5, 6, 6....];
        //       min            max
        //      2, 2, 3, 3, 4, 7
        //       find the 3rd and 4th element
        let median = -1;
        if (isEven(cumulativeCount[max])) {
            const half = Math.floor(cumulativeCount[max] / 2);
            const halfPlus1 = half + 1;

            const halfIndex = findIndexOf(cumulativeCount, half);
            const halfPlus1Index = findIndexOf(cumulativeCount, halfPlus1);

            median = halfIndex + halfIndex / 2
        }
        else {
            //  0, 1, 2 ,3  4  5  6, 7  8 
            // [0, 0, 2, 4, 5, 5, 5, 7, 7....];
            //       min             max
            //      2, 2, 3, 3, 4, 7, 7
            //         4th element => 7 / 2 ceil
            //   
            const half = Math.ceil(cumulativeCount[max] / 2);
            median= findIndexOf(cumulativeCount, half);
        }
        
        return [min, max, average, median];
    };

    function findIndexOf(cumulativeCount: number[], half: number) {
        for (let i = 0; i < cumulativeCount.length; i++) {
            if (cumulativeCount[i] >= half && (cumulativeCount[i - 1] || -1) < half) {
                return i;
            }
        }

        return -1;
    }


    function isEven(upToHere: number) {
        return upToHere % 2 === 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




