xdescribe('leetcode num: description', () => {
    // idea queue / bfs / + hashset /
    // hashset prevents going in circles
    function func(): void {
        // if (!node) return nullptr;
        // typedef UndirectedGraphNode Node;
        // unordered_set<Node*> done;
        // unordered_map<Node*, Node*> m;
        // queue<Node*> q;
        // q.push(node);
        // while (!q.empty()) {
        //   Node* s = q.front(); q.pop();
        //   if (done.count(s)) continue;
        //   done.insert(s);
        //   if (!m.count(s))
        //     m[s] = new Node(s->label);
        //   Node* t = m[s];
        //   for (Node* ss : s->neighbors) {
        //     if (!m.count(ss))
        //       m[ss] = new Node(ss->label);
        //     q.push(ss);
        //     t->neighbors.push_back(m[ss]);
        //   }
        // }
        // return m[node];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
