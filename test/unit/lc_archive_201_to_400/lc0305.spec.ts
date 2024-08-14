xdescribe('leetcode 305: number of islands', () => {
    // union find

    class NumberOfIsland {
        private nodes = new Map<string, { self: string; parent: string; rank: number }>();
        private heads = new Map<string, number>();
        private currentRank = 0;

        private m = 0;
        private n = 0;
        constructor(m: number, n: number) {
            this.m = m;
            this.n = n;
        }

        public addIsland(row: number, col: number): number {
            const key = [row, col].join();

            if (this.heads.has(key)) {
                return this.heads.size;
            }

            this.heads.set(key, this.currentRank++);
            this.nodes.set(key, { self: key, parent: key, rank: this.currentRank });

            const neighbors = this.getNeighbors(row, col);

            this.mergeIslands(key, neighbors);

            return this.heads.size;
        }

        private mergeIslands(key: string, neighbors: number[][]) {
            // get neighbor parents
            // set neighbor's parents to highest rank (lowest number)

            const parents: any[] = [this.heads.get(key)];

            for (const neighbor of neighbors) {
                const neighborKey = this.toKey(neighbor);
                if (this.nodes.has(neighborKey)) {
                    let self = this.nodes.get(neighborKey);
                    const parent = this.findParent(self);
                    parents.push(parent);
                }
            }

            this.mergeParentByRank(parents);
        }

        private mergeParentByRank(parents: any[]) {
            parents.sort((a, b) => a.rank - b.rank);

            for (let i = 1; i < parents.length; i++) {
                this.nodes.set(parents[i].self, { self: parents[i].self, parent: parents[0].self, rank: parents[i].rank });
                this.heads.delete(parents[i].self);
            }
        }

        private findParent(self: { self: string; parent: string; rank: number } | undefined): { self: string; parent: string; rank: number } | undefined {
            while (self && self.parent !== self.self) {
                let parentKey = self.parent;
                let parent = this.nodes.get(parentKey);
                if (parent) {
                    this.nodes.set(self.self, { self: self.self, parent: parentKey, rank: self.rank });
                }

                self = parent;
            }

            return self;
        }

        private toKey(neighbor: number[]): string {
            return [neighbor[0], neighbor[1]].join();
        }

        private getNeighbors(row: number, col: number): number[][] {
            const directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];

            const neighbors: number[][] = [];
            for (const p of directions) {
                const newRow = p[0] + row;
                const newCol = p[1] + col;

                if (this.isValid(newRow, newCol)) {
                    neighbors.push([newRow, newCol]);
                }
            }

            return neighbors;
        }

        private isValid(r: number, c: number) {
            return r >= 0 && r < this.m && c >= 0 && c < this.n;
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
