xdescribe('leetcode 1257: smallest common region', () => {
    
    
    function findSmallestRegion(regions: string[], region1: string, region2: string): string {
        const childParentMap = new Map<string, string>();

        for (const region of regions) {
            for (let i = 0; i < region.length; i++) {
                if (!childParentMap.has(region[i])) {
                    childParentMap.set(region[i], region[0]);
                }
            }
        }

        const parents = new Set<string>();
        find(region1, childParentMap, parents);
        return findCommonParents(region2, childParentMap, parents);
    }

    function findCommonParents(region: string, childParentMap: Map<string, string>, parents: Set<string>) {
        const p = childParentMap.get(region)!;
        if (parents.has(p)) {
            return p;
        }
        
        
        return findCommonParents(p, childParentMap, parents);
    }

    function find(region: string, childParentMap: Map<string, string>, parents: Set<string>) {
        const p = childParentMap.get(region)!;
        parents.add(p);
        
        find(p, childParentMap, parents)
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



