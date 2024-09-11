xdescribe('leetcode num: description', () => {
    function isValidTags(code: string): boolean {
        const st: string[] = [];
        for (let i = 0; i < code.length; ++i) {
            if (i > 0 && st.length === 0) return false;
            if (code.substring(i, 9) == "<![CDATA[") {
                let j = i + 9;
                i = code.indexOf("]]>", j);
                if (i < 0) return false;
                i += 2;
            } else if (code.substring(i, 2) == "</") {
                let j = i + 2;
                i = code.indexOf(">", j);
                if (i < 0) return false;
                const tag = code.substring(j, i - j);
                if (st.length === 0 || st[st.length - 1] != tag) return false;
                st.pop();
            } else if (code.substring(i, 1) == "<") {
                let j = i + 1;
                i = code.indexOf(">", j);
                if (i < 0 || i == j || i - j > 9) return false;
                for (let k = j; k < i; ++k) {
                    if (code[k] < 'A' || code[k] > 'Z') return false;
                }
                const tag = code.substring(j, i - j);
                st.push(tag);
            }
        }
        return st.length === 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
