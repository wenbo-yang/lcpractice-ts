xdescribe('leetcode 1282: group the people the group size they belong to', () => {
    function groupThePeople(groupSizes: number[]): number[][] {
        const subGroups: number[][] = [];
        const groupMap = new Map<number, number[]>();
        const totalMembers = groupSizes.length;

        for (let i = 0; i < totalMembers; i++) {
            const currentSize = groupSizes[i];
            let groupList = groupMap.get(currentSize) || [];
            groupList.push(i);
            groupMap.set(currentSize, groupList);
        
            if (groupList.length === currentSize) {
                subGroups.push(groupList);
                groupMap.set(currentSize, []);
            }
        }
        return subGroups;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
