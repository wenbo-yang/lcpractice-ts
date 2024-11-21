import {Queue} from '../commonLibs';

xdescribe('leetcode 854: k similiar strings', () => {
    function kSimilarity(s1: string, s2: string): number {
        const queue = new Queue<string>();
        const visited = new Set<string>(['s1']);

        queue.enque(s1);
        let steps = 0;
        
        while(queue.length) {
            const top = queue.deque() || [];
            for (const s of top) {
                if (s === s2) {
                    return steps;
                }
                else {
                    const neighbors = getNeighbors(s, s2);

                    for (const neighbor of neighbors) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.enque(neighbor);
                        }
                    }
                }
            }
        }
        
        return 0;
    };

    function getNeighbors(currentString: string, target: string) {
        let pos = 0;
        const n = currentString.length;

        // Find the first position where the characters differ between the two strings
        while (pos < n && currentString.charAt(pos) === target.charAt(pos)) {
            pos++;
        }

        let results: string[] = []; 

        for (let j = pos + 1; j < n; j++) {
            if (
            currentString.charAt(j) === target.charAt(pos) &&
            currentString.charAt(j) !== target.charAt(j)
            ) {
            let swappedString =
                currentString.substring(0, pos) +
                currentString.charAt(j) +
                currentString.substring(pos + 1, j) +
                currentString.charAt(pos) +
                currentString.substring(j + 1);
            results.push(swappedString); // Add the new string to the results array
            }
        }
        return results;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


