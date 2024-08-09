xdescribe('leetcode 411: description', () => {
    function generateAbbreviation(word: string, num: number): string {
        const sb: string[] = [];
        let consecutiveCount = 0;
        const length = word.length;
        for (let i = 0; i < length; i++) {
            let cur = num & 1;
            if (cur == 1)
                consecutiveCount++;
            else {
                if (consecutiveCount > 0) {
                    sb.push(consecutiveCount.toString());
                    consecutiveCount = 0;
                }
                sb.push(word.charAt(i));
            }
            num >>= 1;
        }
        if (consecutiveCount > 0)
            sb.push(consecutiveCount.toString());
        return sb.toString();
    }

    function minAbbreviation(target: string, dictionary: string[]) {
        const length = target.length;
        let totalCount = 1 << length;
        let minAbbr = target;
        let minLength = length;
        for (let i = totalCount; i > 0; i--) {
            const abbr = generateAbbreviation(target, i);
            if (abbr.length > minLength)
                continue;
            let flag: boolean = true;
            for (const word of dictionary) {
                if (word.length == length) {
                    let abbr2 = generateAbbreviation(word, i);
                    if (abbr2 === (abbr)) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) {
                if (abbr.length < minLength) {
                    minAbbr = abbr;
                    minLength = abbr.length;
                }
            }
        }
        return minAbbr;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});