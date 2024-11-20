xdescribe('leetcode 978: longest turbulent subarray', () => {
    function maxTurbulenceSize(arr: number[]): number {
        let increasingSequenceLength = 1; 
        let decreasingSequenceLength = 1; 
        let maxSequenceLength = 1; 

        for (let i = 1; i < arr.length; ++i) {
            let tempIncreasingLength = arr[i - 1] < arr[i] ? decreasingSequenceLength + 1 : 1;
            let tempDecreasingLength = arr[i - 1] > arr[i] ? increasingSequenceLength + 1 : 1;
            increasingSequenceLength = tempIncreasingLength;
            decreasingSequenceLength = tempDecreasingLength;
            maxSequenceLength = Math.max(maxSequenceLength, increasingSequenceLength, decreasingSequenceLength);
        }

        return maxSequenceLength;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
