xdescribe('leetcode 582: kill processes', () => {
    function killProcesses(pid: number[], ppid: number[], id: number): number[] {
        const childrenMap = new Map<number, number[]>();

        for (let i = 0; i < ppid.length; i++) {
            const child = pid[i];
            const parent = ppid[i];

            if (parent === 0) {
                continue;
            }
            else {
                const childrenArray = childrenMap.get(ppid[i]) || [];
                childrenArray.push(child);
                childrenMap.set(parent, childrenArray);
            }
        }

        const result: number[] = [];    
        getAllChildren(childrenMap, id, result);
        return result;
    }

    function getAllChildren(childrenMap: Map<number, number[]>, id: number, result: number[]) {
        result.push(id);

        const childrenArray = childrenMap.get(id);

        if (childrenArray) {
            for(const c of childrenArray) {
                getAllChildren(childrenMap, c, result);
            }
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


