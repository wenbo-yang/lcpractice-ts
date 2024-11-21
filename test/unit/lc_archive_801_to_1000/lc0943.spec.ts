xdescribe('leetcode 943: shortest superstring', () => {
    function calculateOverlaps(words: string[]): number[][] {
        const wordCount = words.length;
        let overlaps: number[][] = new Array<Array<number>>(wordCount).fill([]).map( r => new Array<number>(wordCount).fill(0));
    
        // Calculate overlap for each pair of words
        for (let i = 0; i < wordCount; ++i) {
            for (let j = 0; j < wordCount; ++j) {
                if (i !== j) {
                    for (let overlapSize = Math.min(words[i].length, words[j].length); overlapSize > 0; --overlapSize) {
                        if (words[i].endsWith(words[j].substring(0, overlapSize))) {
                            overlaps[i][j] = overlapSize;
                            break;
                        }
                    }
                }
            }
        }
    
        return overlaps;
    }
    
    function findShortestSuperstring(words: string[]): string {
        const wordCount = words.length;
        const overlaps = calculateOverlaps(words);
    
        let dp: number[][] = new Array<Array<number>>(1 << wordCount).fill([]).map( r => new Array<number>(wordCount).fill(0));
        let parent: number[][] = new Array<Array<number>>(1 << wordCount).fill([]).map( r => new Array<number>(wordCount).fill(0));
    
        // Fill the dp table
        for (let mask = 0; mask < (1 << wordCount); ++mask) {
            for (let j = 0; j < wordCount; ++j) {
                if ((mask >> j) & 1) {
                    let previousMask = mask ^ (1 << j);
                    for (let k = 0; k < wordCount; ++k) {
                        if ((previousMask >> k) & 1) {
                            let val = dp[previousMask][k] + overlaps[k][j];
                            if (val > dp[mask][j]) {
                                dp[mask][j] = val;
                                parent[mask][j] = k;
                            }
                        }
                    }
                }
            }
        }
    
        // Reconstruct the path
        let path: number[] = [];
        let j = 0;
    
        // Find the maximum overlap
        for (let i = 0; i < wordCount; ++i) {
            if (dp[(1 << wordCount) - 1][i] > dp[(1 << wordCount) - 1][j]) {
                j = i;
            }
        }
    
        // Build the path backwards
        for (let mask = (1 << wordCount) - 1; parent[mask][j] !== -1; ) {
            let prev = parent[mask][j];
            path.push(j);
            mask ^= (1 << j);
            j = prev;
        }
        path.push(j);
    
        // Include the remaining words
        let visited = new Set<number>(path);
        for (let i = 0; i < wordCount; ++i) {
            if (!visited.has(i)) {
                path.push(i);
            }
        }
    
        // Construct the shortest superstring
        path.reverse();
        let superstring = words[path[0]];
        for (let i = 1; i < path.length; ++i) {
            let overlap = overlaps[path[i - 1]][path[i]];
            superstring += words[path[i]].substring(overlap);
        }
    
        return superstring;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
