xdescribe('leetcode 28: find first occurance in a string', () =>{
    function strStr(haystack: string, needle: string): number {
        return haystack.indexOf(needle);
    };

    it('test case 1 Input: haystack = "sadbutsad", needle = "sad", output 0', () => {
        const output = strStr('sadbutsad', 'sad');
        expect(output).toEqual(0)
    });
});