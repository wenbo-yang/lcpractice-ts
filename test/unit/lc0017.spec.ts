xdescribe('leetcode 17: letter combination of phone numbers', () =>{
    function letterCombinations(digits: string): string[] {
        if (!digits || digits.length === 0) {
            return [];
        }

        const map = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        } as any;

        const length = 1;
        let result = map[digits.charAt(0)];
        for (let i = 1; i < digits.length; i++) {
            result = expandToNextLevel(result, map, digits.charAt(i)); 
        }

        return result;
    };

    function expandToNextLevel(input: string[], map: any, char: string): string[] {
        const result: string[] = [];
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < map[char].length; j++) {
                result.push(input[i] + map[char][j]);
            }
        }

        return result;
    }


    it('test case 1 Input: Input: digits = "23", target = 1, output ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () =>{
        const digits = '23'
        const output = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

        const result = letterCombinations(digits);
        expect(result).toEqual(output);
    });
});


