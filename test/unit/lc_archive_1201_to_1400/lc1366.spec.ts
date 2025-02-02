xdescribe('leetcode 1366: rank team by votes', () => {
    function rankTeams(votes: string[]): string {
        const numTeams = votes[0].length;
        const rankCount: number[][] = Array.from({ length: 26 }, () => new Array(numTeams).fill(0));
        for (let vote of votes) {
            for (let i = 0; i < numTeams; i++) {
                const teamIndex = vote.charCodeAt(i) - 'A'.charCodeAt(0);
                rankCount[teamIndex][i]++;
            }
        }

        let ranking = votes[0].split('');

        ranking.sort((a, b) => {
            const team1Index = a.charCodeAt(0) - 'A'.charCodeAt(0);
            const team2Index = b.charCodeAt(0) - 'A'.charCodeAt(0);

            for (let rank = 0; rank < numTeams; rank++) {
                if (rankCount[team1Index][rank] !== rankCount[team2Index][rank]) {
                    return rankCount[team1Index][rank] > rankCount[team2Index][rank] ? -1 : 1;
                }
            }

            return a < b ? -1 : 1;
        });
        
        return ranking.join('');
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
