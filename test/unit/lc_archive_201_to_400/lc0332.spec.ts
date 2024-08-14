xdescribe('leetcode 332: reconstruct itineray', () => {
    function findItinerary(tickets: string[][]): string[] {
        const map = new Map<string, string[]>();

        for (const ticket of tickets) {
            const children = map.get(ticket[1]) || [];
            children.push(ticket[1]);
            map.set(ticket[0], children);
        }

        sortChildren(map); // in reverst so we can pop back and push back
        const start = 'JFK';
        const route: string[] = [];
        postOrderTraversal(map, start, route);

        return route.reverse();
    }

    function sortChildren(map: Map<string, string[]>) {
        for (const key of map.keys()) {
            const children = map.get(key) || [];
            children.sort().reverse();
            map.set(key, children);
        }
    }

    function postOrderTraversal(map: Map<string, string[]>, start: string, route: string[]) {
        const children = map.get(start) || [];

        while (children.length != 0) {
            const child = children.pop() || '';
            postOrderTraversal(map, child, route);
        }

        route.push(start);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
