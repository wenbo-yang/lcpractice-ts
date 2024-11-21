import _ from 'lodash';

xdescribe('leetcode 893: number of special equivalent strings', () => {
    function numSpecialEquivGroups(words: string[]): number {
        const uniqueGroups: Set<string> = new Set();
  
        words.forEach((word) => {
            let oddChars: string = "";
            let evenChars: string = "";
        
            for (let i = 0; i < word.length; i++) {
                if (i % 2 === 0) {
                    evenChars += word[i];
                } else {
                    oddChars += word[i];
                }
            }
        
            const sortedOddChars = _.sortBy(oddChars.split('')).join('');
            const sortedEvenChars = _.sortBy(evenChars.split('')).join('');
        
            uniqueGroups.add(sortedEvenChars + sortedOddChars);
        });
    
        return uniqueGroups.size;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
