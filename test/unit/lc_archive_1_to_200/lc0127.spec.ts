xdescribe('leetcode 127: Word Ladder', () => {
    // BFS
    // class Solution {
    //     public:
    //         int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
    //             unordered_set<string> dict(wordList.begin(), wordList.end());
    //             if (!dict.count(endWord)) return 0;
    //             queue<string> q;
    //             q.push(beginWord);
    //             int l = beginWord.length();
    //             int step = 0;
    //             while (!q.empty()) {
    //                 ++step;
    //                 for (int size = q.size(); size > 0; size--) {
    //                     string w = q.front();
    //                     q.pop();
    //                     for (int i = 0; i < l; i++) {
    //                         char ch = w[i];
    //                         for (int j = 'a'; j <= 'z'; j++) {
    //                             w[i] = j;
    //                             // Found the solution
    //                             if (w == endWord) return step + 1;
    //                             // Not in dict, skip it
    //                             if (!dict.count(w)) continue;
    //                             // Remove new word from dict
    //                             dict.erase(w);
    //                             // Add new word into queue
    //                             q.push(w);
    //                         }
    //                         w[i] = ch;
    //                     }
    //                 }
    //             }
    //             return 0;
    //         }
    //     };

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
