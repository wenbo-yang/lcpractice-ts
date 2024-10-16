xdescribe('leetcode 773: sliding puzzle', () => {
    function slidingPuzzle(board: number[][]): number {
        const m = 2;
        const n = 3;

    
        let start = '', seq = '';
        const end = "123450";
        for (let i = 0; i < m; ++i) {
            for (let j = 0; j < n; ++j) {
                start += board[i][j].toString() + '0';
                if (board[i][j] != 0) seq += board[i][j].toString() + '0';
            }
        }
        if (!check(seq)) return -1;
        
        // priority_queue<PIS, vector<PIS>, greater<PIS>> q;
        // unordered_map<string, int> dist;
        // dist[start] = 0;
        // q.push({f(start), start});
        // vector<int> dirs = {-1, 0, 1, 0, -1};
        // while (!q.empty()) {
        //     PIS t = q.top();
        //     q.pop();
        //     string state = t.second;
        //     int step = dist[state];
        //     if (state == end) return step;
        //     int p1 = state.find('0');
        //     int i = p1 / n, j = p1 % n;
        //     for (int k = 0; k < 4; ++k) {
        //         int x = i + dirs[k], y = j + dirs[k + 1];
        //         if (x < 0 || x >= m || y < 0 || y >= n) continue;
        //         int p2 = x * n + y;
        //         swap(state[p1], state[p2]);
        //         if (!dist.count(state) || dist[state] > step + 1) {
        //             dist[state] = step + 1;
        //             q.push({step + 1 + f(state), state});
        //         }
        //         swap(state[p1], state[p2]);
        //     }
        // }
        return -1;
    }

    function check(s: string) {
        let n = s.length;
        let cnt = 0;
        for (let i = 0; i < n; ++i)
            for (let j = i; j < n; ++j)
                if (s[i] > s[j])
                    ++cnt;
        return cnt % 2 == 0;
    }

    function f(s: string,) {
        let ans = 0;
        for (let i = 0; i < 6; ++i) {
            if (s[i] == '0') continue;
            let num = s[i].charCodeAt(0) - '1'.charCodeAt(0);
            ans += Math.abs(num / 3 - i / 3) + Math.abs(num % 3 - i % 3);
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
