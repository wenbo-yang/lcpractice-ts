xdescribe('leetcode 825: friend requests of approperiate ages', () => {
    function numFriendRequests(ages: number[]): number {
        const ageCounter: number[] = new Array(121).fill(0); 

        ages.forEach((age) => {
            ageCounter[age]++;
        });
    
        let totalFriendRequests: number = 0; 
    
        for (let ageA = 1; ageA <= 120; ++ageA) {
            const countAgeA = ageCounter[ageA]; 
    

            for (let ageB = 1; ageB <= 120; ++ageB) {
                const countAgeB = ageCounter[ageB]; 
    
                 if (!(ageB <= 0.5 * ageA + 7 || ageB > ageA || (ageB > 100 && ageA < 100) )) {
                    totalFriendRequests += countAgeA * countAgeB; 
                  
                    if (ageA === ageB) {
                        totalFriendRequests -= countAgeB;
                    }
                }
            }
        }
    
        return totalFriendRequests;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
