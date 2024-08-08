xdescribe('leetcode 207: can finish courses', () => {
    function canFinish(numCourses: number, prerequisites: number[][]): boolean {
        // semi union find //
        const prerequisiteMapping: Map<number, Set<number>> = new Map();

        for (let i = 0; i < prerequisites.length; i++) {
            prerequisiteMapping.set(prerequisites[i][0], (prerequisiteMapping.get(prerequisites[i][0]) || new Set<number>()).add(prerequisites[i][1]));
        }

        for (let i = 0; i < numCourses; ++i) {
            let visited = new Array<boolean>(numCourses).fill(false);
            if (cycle(i, i, visited, prerequisiteMapping)) return false;
        }

        return true;
    }

    function cycle(start: number, curr: number, visited: boolean[], prerequisiteMapping: Map<number, Set<number>>): boolean {
        if (curr === start && visited[start]) return true;

        if (!prerequisiteMapping.get(curr)) return false;

        for (const next of prerequisiteMapping.get(curr) || new Set<number>()) {
            if (visited[next]) continue;
            visited[next] = true;
            if (cycle(start, next, visited, prerequisiteMapping)) return true;
        }
        return false;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
