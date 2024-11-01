xdescribe('leetcode 881: num of rescue boats', () => {
    function numRescueBoats(people: number[], limit: number): number {
        // [1, 2, 2, 3] limit = 5 
        //  
        people.sort((a,b) => a - b);

        let l = 0;
        let r = people.length - 1;
        
        if (people[r] > limit) {
            return -1;
        }
        let numberOfBoats = 0;
        while (l < r) {
            if (people[l] + people[r] <= limit) {
                l++;
            }
            r--
            numberOfBoats++;
        }

        return l === r ? numberOfBoats + 1 : numberOfBoats;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
