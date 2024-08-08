xdescribe('leetcode 271: encode and decode strings', () => {
    class Codec {
        // Encodes a list of strings to a single string.
        public encode(strs: string[]): string {
            const ans: string[] = [];
            for (const s of strs) {
                ans.push(String.fromCharCode(s.length));
                ans.push(s);
            }
            return ans.join('');
        }

        // Decodes a single string to a list of strings.
        public decode(s: string): string[] {
            const ans: string[] = [];
            let i = 0,
                n = s.length;
            while (i < n) {
                let size = s.charAt(i++).charCodeAt(0);
                ans.push(s.substring(i, i + size));
                i += size;
            }
            return ans;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
