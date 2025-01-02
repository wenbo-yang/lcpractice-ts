xdescribe('leetcode 1244: design leader board', () => {
    class LeaderBoard {
        private playerScoreMap = new Map<number, number>();
        private pseudoSortedTree = new Map<number, number>();

        addScore(playerId: number, score: number) {
            this.playerScoreMap.set(playerId, (this.playerScoreMap.get(playerId) || 0) + score);
            this.pseudoSortedTree.set(playerId, (this.pseudoSortedTree.get(playerId) || 0) + score);
            this.sortTree();
        }
        
        reset(playerId: number) {
            this.playerScoreMap.set(playerId, 0);
            this.pseudoSortedTree.set(playerId, 0);
            this.sortTree();
        }
        
        top(k: number) {
            let count = 0;
            let value = 0;
            for (const c of this.pseudoSortedTree.values()) {
                if (count++ === k) {
                    break;
                }

                value += c;
            }

            return value;
        }

        private sortTree() {
            const sortedTree = Array.from(this.pseudoSortedTree.entries()).sort((a,b) => b[1] - a[1]);
            this.pseudoSortedTree = new Map<number,number>(sortedTree);s
        }
    }
    
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
