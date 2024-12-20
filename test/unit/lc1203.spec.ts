xdescribe('leetcode 1203: sort items by groups respecting dependencies', () => {
    function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
        let newIndex = m;
    
        const groupToItems: number[][] = new Array(n + m).fill(0).map(() => []);
        const itemInDegree: number[] = new Array(n).fill(0);
        const groupInDegree: number[] = new Array(n + m).fill(0);
        const itemGraph: number[][] = new Array(n).fill(0).map(() => []);
        const groupGraph: number[][] = new Array(n + m).fill(0).map(() => []);
    
        for (let i = 0; i < n; ++i) {
            if (group[i] === -1) {
                group[i] = newIndex++;
            }
            groupToItems[group[i]].push(i);
        }
    
        for (let i = 0; i < n; ++i) {
            for (const j of beforeItems[i]) {
                if (group[i] === group[j]) {
                    ++itemInDegree[i];
                    itemGraph[j].push(i);
                } else {
                    ++groupInDegree[group[i]];
                    groupGraph[group[j]].push(group[i]);
                }
            }
        }
    
        let combinedItems = new Array(n + m).fill(0).map((_, i) => i);
    
        const topologicalSort = (graph: number[][], degree: number[], elements: number[]): number[] => {
            const queue: number[] = [];
            for (const element of elements) {
                if (degree[element] === 0) {
                    queue.push(element);
                }
            }
            const sortedOrder: number[] = [];
            while (queue.length) {
                const element = queue.pop()!;
                sortedOrder.push(element);
                for (const neighbor of graph[element]) {
                    if (--degree[neighbor] === 0) {
                        queue.push(neighbor);
                    }
                }
            }
            return sortedOrder.length === elements.length ? sortedOrder : [];
        };
    
        const sortedGroups = topologicalSort(groupGraph, groupInDegree, combinedItems);
        if (sortedGroups.length === 0) {
            return [];
        }
    
        const finalOrder: number[] = [];
        for (const groupId of sortedGroups) {
            combinedItems = groupToItems[groupId];
            const sortedItems = topologicalSort(itemGraph, itemInDegree, combinedItems);
            if (sortedItems.length !== combinedItems.length) {
                return [];
            }
            finalOrder.push(...sortedItems);
        }
    
        return finalOrder;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
