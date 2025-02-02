xdescribe('leetcode 1206: design skip list', () => {
    type NodePointer = Node | null;

    class Node {
        public value: number;
        public forward: NodePointer[];

        constructor(val: number, lvl: number) {
            this.value = val;
            this.forward = new Array<NodePointer>(lvl).fill(null);
        }
    }

    const PROBABILITY = 1 / 4;
    const MAX_LEVEL = 32;

    let head: Node = new Node(-1, MAX_LEVEL);
    let currentLevel: number = 0;

    function randomLevel(): number {
        let lvl: number = 1;
        while (lvl < MAX_LEVEL && Math.random() < PROBABILITY) {
            lvl++;
        }
        return lvl;
    }

    function findClosest(currentNode: Node, lvl: number, target: number): Node {
        while (currentNode.forward[lvl] && currentNode.forward[lvl]!.value < target) {
            currentNode = currentNode.forward[lvl]!;
        }
        return currentNode;
    }

    function search(target: number) : boolean {
        let currentNode: Node = head;
        for (let i = currentLevel - 1; i >= 0; i--) {
            currentNode = findClosest(currentNode, i, target);
            if (currentNode.forward[i] && currentNode.forward[i]!.value === target) {
                return true;
            }
        }
        return false;
    }

    function add(number: number) : void {
        let updateArray: Node[] = new Array<Node>(MAX_LEVEL);
        let currentNode: Node = head;

        for (let i = currentLevel - 1; i >= 0; i--) {
            currentNode = findClosest(currentNode, i, number);
            updateArray[i] = currentNode;
        }
    
        let newLevel: number = randomLevel();
        let newNode: Node = new Node(number, newLevel);

        currentLevel = Math.max(currentLevel, newLevel);

        for (let i = 0; i < newLevel; i++) {
            newNode.forward[i] = updateArray[i].forward[i];
            updateArray[i].forward[i] = newNode;
        }
    }

    function erase(number: number) : boolean {
        let updateArray: Node[] = new Array<Node>(MAX_LEVEL);
        let currentNode: Node = head;
        let found: boolean = false;

        for (let i = currentLevel - 1; i >= 0; i--) {
            currentNode = findClosest(currentNode, i, number);
            if (currentNode.forward[i] && currentNode.forward[i]!.value === number) {
                currentNode.forward[i] = currentNode.forward[i]!.forward[i];
                found = true;
            }
        }

        while (currentLevel > 1 && !head.forward[currentLevel-1]) {
            currentLevel--;
        }

        return found;
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
