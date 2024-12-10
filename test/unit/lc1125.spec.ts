xdescribe('leetcode 1125: smallest sufficient team', () => {
    function smallestSufficientTeam(reqSkills: string[], people: string[][]): number[] {
        const skillToIndex: Map<string, number> = new Map();
        const skillCount = reqSkills.length;
        const peopleCount = people.length;
        for (let i = 0; i < skillCount; ++i) {
            skillToIndex.set(reqSkills[i], i);
        }
    
        const peopleSkills: number[] = new Array(peopleCount).fill(0);
        for (let i = 0; i < peopleCount; ++i) {
            for (const skill of people[i]) {
                peopleSkills[i] |= 1 << skillToIndex.get(skill)!;
            }
        }
    
        const MAX_INT = 1 << 30;
        const teamSize: number[] = new Array(1 << skillCount).fill(MAX_INT);
        const lastPersonAdded: number[] = new Array(1 << skillCount).fill(0);
        const prevState: number[] = new Array(1 << skillCount).fill(0);
        teamSize[0] = 0;
      
        for (let i = 0; i < (1 << skillCount); ++i) {
            if (teamSize[i] === MAX_INT) continue;
    
            for (let j = 0; j < peopleCount; ++j) {
                const combinedSkills = i | peopleSkills[j];
                if (teamSize[i] + 1 < teamSize[combinedSkills]) {
                    teamSize[combinedSkills] = teamSize[i] + 1;
                    lastPersonAdded[combinedSkills] = j;
                    prevState[combinedSkills] = i;
                }
            }
        }
    
        const teamMembers: number[] = [];
        for (let i = (1 << skillCount) - 1; i > 0; i = prevState[i]) {
            teamMembers.push(lastPersonAdded[i]);
        }
    
        
        return teamMembers.reverse();
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
