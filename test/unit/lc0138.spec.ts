xdescribe('leetcode 138: Copy List with Random Pointer', () => {
    class _Node {
        val: number;
        next: _Node | null;
        random: _Node | null;

        constructor(val?: number, next?: _Node, random?: _Node) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
            this.random = random === undefined ? null : random;
        }
    }
    // idea
    // push node and its relative position into map;
    // generate array and host new node;
    // copy the new node values and next
    // for each the node in orignial map, make the new rand pointer find the relative position
    // and point;
    function copyRandomList(head: _Node | null): _Node | null {
        const newNodes: _Node[] = [];
        const map: Map<_Node | null, number> = new Map();
        let temp = head;
        let index = 0;
        while (temp) {
            newNodes.push(new _Node(temp.val, temp.next || undefined, temp.random || undefined));
            map.set(temp, index++);

            if (newNodes.length > 1) {
                const current = newNodes[newNodes.length - 1];
                const prev = newNodes[newNodes.length - 2];
                prev.next = current;
            }
        }

        for (let i = 0; i < newNodes.length; i++) {
            if (newNodes[i].random !== null) {
                const position = map.get(newNodes[i].random) || -1;
                newNodes[i].random = newNodes[position] || null;
            }
        }

        return newNodes[0];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
