xdescribe('leetcode 756: description', () => {
    function pyramidTransition(bottom: string, allowed: string[]): boolean {
        const f = new Array<Array<number>>(7).fill([]).map(r => new Array<number>(7).fill(0));
        const map = new Map<string, boolean>();
        for (const s of allowed) {
            let a = s.charCodeAt(0) - 'A'.charCodeAt(0);
            let b = s.charCodeAt(1) - 'A'.charCodeAt(0);
            f[a][b] |= 1 << (s.charCodeAt(2) - 'A'.charCodeAt(0));
        }
        return dfs(bottom, [], f, map);
    };

    function dfs(s: string, t: string[], f:number[][], map: Map<string, boolean>): boolean {
        if (s.length == 1) {
            return true;
        }
        if (t.length + 1 == s.length) {
            return dfs(t.join(''), [], f, map);
        }
        
        let k = s + "." + t.join('');
        if (map.has(k)) {
            return map.get(k) || false;
        }
        let a = s.charCodeAt(t.length) - 'A'.charCodeAt(0), b = s.charCodeAt(t.length + 1) - 'A'.charCodeAt(0);
        let cs = f[a][b];
        for (let i = 0; i < 7; ++i) {
            if (((cs >> i) & 1) == 1) {
                t.push(String.fromCharCode('A'.charCodeAt(0) + i));
                if (dfs(s, t, f, map)) {
                    map.set(k, true);
                    return true;
                }
                t.pop();
            }
        }
        map.set(k, false);
        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
