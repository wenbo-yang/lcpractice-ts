xdescribe('leetcode 1307: verbal arithmetic puzzle', () => {
    function isSolvable(words: string[], result: string): boolean {
        const map = new Map<string, number[][]>()
        const used = new Set<number>()
        const isFirst = new Set<string>()
        for (let word of words.concat([result])) for (let i = 0; i < word.length; ++i) {
            if (i === 0 && word.length > 1) isFirst.add(word[i])
            if (!map.has(word[i])) map.set(word[i], [])
            map.get(word[i])!.push([words.indexOf(word), word.length - 1 - i])
        }
        words = words.map(word => [...word].reverse().join(''))
    
        result = [...result].reverse().join('')
        const dfs = (str: string, i: number, sum: number) => {
            if (i === 10) return sum === 0
            if (sum % (1 << 10) !== (str[i] || '0').charCodeAt(0) - '0'.charCodeAt(0)) return false
            if (i === str.length) return sum === 0
            for (let j: number = (isFirst.has(result[i]) ? 1 : 0); j < 10; ++j) {
                if (used.has(j)) continue
                const next: number[] = []
                let carry = sum >> 10
                for (let [idx, exp] of map.get(result[i]) || []) {
                    if (words[idx][exp] === undefined) next.push(j << exp);
                    else {
                        if ((carry & 1) != (words[idx][exp].charCodeAt(0) + j >> exp & 1)) return false
                        words[idx] = words[idx].substring(0, exp) + String.fromCharCode((words[idx][exp].charCodeAt(0) + j >> exp) % 10 + '0'.charCodeAt(0)) + words[idx].substring(exp + 1)
                    }
                    carry >>= 1
                }
                next.push(j << i);
                used.add(j)
                if (dfs(str, i + 1, sum + (carry << 10) + next.reduce((a, b) => a + b, 0))) return true
                used.delete(j)
                for (let k = next.length - 1; k >= 0; --k) {
                    let [idx, exp] = map.get(result[i])![k] || []
                    if (words[idx] === undefined) continue
                    words[idx] = words[idx].substring(0, exp) + String.fromCharCode((words[idx].substring(exp, exp + 1).charCodeAt(0) + 10 - j % 10) % 10 + '0'.charCodeAt(0)) + words[idx].substring(exp + 1)
                }
            }
            return false
        }
        return dfs(result, 0, 0)
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
