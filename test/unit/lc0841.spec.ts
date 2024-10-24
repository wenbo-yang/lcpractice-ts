xdescribe('leetcode 841: can visit all rooms', () => {
    function canVisitAllRooms(rooms: number[][]): boolean {
        const queue: number[] = [0];
        const visited: boolean[] = new Array<boolean>(rooms.length).fill(false);

        while(queue.length) {
            const top = queue.shift() || 0;
            visited[top] = true;

            for (const child of rooms[top]) {
                if (!visited[child]) { 
                    queue.push(child)
                }
            }
        }

        return visited.findIndex(v => v === false) !== -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
