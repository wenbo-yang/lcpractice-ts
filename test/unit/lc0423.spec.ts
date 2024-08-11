xdescribe('leetcode 423: description', () => {
    class MappingHelper {
        digit: string;
        idChar: string;
        count: number;
        digitNum: number;
        constructor(digit: string, digitNum: number, idChar: string, count: number) {
            this.digit = digit;
            this.idChar = idChar;
            this.count = count;
            this.digitNum = digitNum;
        }
    }

    function originalDigits(s: string): string {
        // const array = ['one1', 'two1', 'three', 'four1', 'five1', 'six1', 'seven1', 'eight1', 'nine1', 'zero1']
        // one z, number of zs = number of zeros 
        // one w, number of ws = number of twos 
        // one x, number of xs = number of sixs,
        // one u, number of us = number of fours
        // one g, number of gs = number of eights
        // after gitting all identifieable counts
        // one f, number of fs = number of fives, 
        // there are 4 os, but after getting single tons, remaining = number of ones
        // three are 2 ss, after getting size, remaining = number of sevens.
        // after getting ones and twos
        // three are 4 ns, after gettigg prevs number n = 2xnines
        // left rs == number of 3s,

        const rankMap = new Map<number, MappingHelper[]>([
            [0, [
                    new MappingHelper('zero', 0, 'z', 1),
                    new MappingHelper('two', 2, 'w', 1),
                    new MappingHelper('six', 6,'x', 1),
                    new MappingHelper('four', 4, 'u', 1),
                    new MappingHelper('eight', 8, 'g', 1),
                ]
            ],
            [1, [
                    new MappingHelper('five', 5, 'f', 1),
                    new MappingHelper('one', 1, 'o', 1),
                    new MappingHelper('seven', 7, 's', 1),
                    new MappingHelper('three', 3, 'h', 1),
                ]
            ],
            [2, [
                    new MappingHelper('nine', 9, 'i', 1),
                ]
            ]
        ]);

        const resultCount = new Array<number>(10).fill(0);
        const charCount = new Map<string, number>();

        constructCharCount(s, charCount); 
        constructDigitCount(resultCount, charCount, rankMap);

        return remapResultCountToString(resultCount);
        
    };

    function constructCharCount(s: string, charCount: Map<string, number>) {
        for (const char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }

    function constructDigitCount(resultCount: number[], charCount: Map<string, number>, rankMap: Map<number, MappingHelper[]>) {
        for (let rank = 0; rank <= 2; rank++) {
            const singleRank = rankMap.get(rank) || [];

            for (const entry of singleRank) {
                let idCharCount = (charCount.get(entry.idChar) || 0) / entry.count;
                resultCount[entry.digitNum] = idCharCount;

                reduceFromCharCount(entry.digit, charCount, idCharCount);
            }
        }
    }

    function reduceFromCharCount(digit: string, charCount: Map<string, number>, iterations: number) {
        const set = new Set<string>(digit.split(''))

        for (const entry of set) {
            if (digit === 'seven' && entry === 'e') {
                iterations = iterations * 2;
            }
            else if (digit === 'three' && entry === 'e') {
                iterations = iterations * 2;
            }
            else if (digit === 'three' && entry === 'e') {
                iterations = iterations * 2;
            }

            charCount.set(entry, (charCount.get(entry) || 0) - iterations)
        }
    }

    function remapResultCountToString(resultCount: number[]): string {
        const resultArray: string[] = []
        for(let i = 0; i < 10; i++) {
            while(resultCount[i] !== 0) {
                resultArray.push(i.toString());
            }
        }

        return resultArray.join('');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






