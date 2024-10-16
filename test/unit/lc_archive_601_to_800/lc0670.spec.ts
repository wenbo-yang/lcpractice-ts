xdescribe('leetcode 670: findmaximum swap', () => {
    function maximumSwap(num: number): number {
        const array = num.toString().split('').map(d => Number(d));

        for (let i = 0; i < array.length - 1; i++) {
            const maxIndex = findMaxIndexInArray(array, i + 1);

            if (array[maxIndex] > array[i]) {
                const temp = array[i];
                array[i] = array[maxIndex];
                array[maxIndex] = temp;
            }
        }

        return Number(array.join(''));
    };
    
    function findMaxIndexInArray(array: number[], startingIndex: number) {
        let maxIndex = startingIndex;

        for (let i = startingIndex; i < array.length; i++) {
            if (array[i] >= array[maxIndex]) {
                maxIndex = i;
            }
        }

        return maxIndex;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


