xdescribe('leetcode 1361: validate binary tree nodes', () => {
    function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
        const visited = new Array<boolean>(n).fill(false);
        let index = 0;
        const queue: number[] = [];
        queue.push(0);
        while (index < queue.length) {
            let top = queue[index];

            let left = leftChild[top];
            let right = rightChild[top];

            if (visited[top]) {
                return false;
            }
            
            visited[top] = true;
            if (left !== -1) queue.push(left);
            if (right !== -1) queue.push(right);

            index++;
        }

        return visited.findIndex(v => v === false) === -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
