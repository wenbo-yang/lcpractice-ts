xdescribe('leetcode 514: description', () => {
    function findRotateSteps(ring: string, key: string): number {
        const mem = new Map<string, number>();
        const memRotations = new Map<string, {newRing: string, steps:number}[]>();

        return findMinStepsHelper(ring, key, 0, 0, mem, memRotations);
    };

    function findMinStepsHelper(ring: string, key: string, index: number, currentSteps, mem: Map<string, number>, memRotations: Map<string, {newRing: string, steps:number}[]>): number {
        if (index >= key.length) {
            return currentSteps;
        }

        if (mem.has(toMapKey(ring, index))) {
            return mem.get(toMapKey(ring, index)) || Number.MAX_SAFE_INTEGER;
        }

        const nextSteps = getAllRotations(ring, key[index], memRotations);
        
        let min = Number.MAX_SAFE_INTEGER;
        
        for (const nextStep of nextSteps) {
           min = Math.min(min, findMinStepsHelper(nextStep.newRing, key, index+1, currentSteps + nextStep.steps, mem, memRotations)); 
        }

        mem.set(toMapKey(ring, index), min);

        return min;
    }   
    
    function toMapKey(ring: string, index: number): string {
        return [ring, index.toString()].join();
    }

    function toRotationKey(ring: string, c: string): string {
        return [ring, c].join();
    }
    
    function getAllRotations(ring: string, c: string, memRotations: Map<string, { newRing: string; steps: number; }[]>) {
        if (memRotations.has(toRotationKey(ring, c))) {
            return memRotations.get(toRotationKey(ring, c)) || [];
        }

        const result: { newRing: string; steps: number; }[] = [];

        const indices: number[] = [];

        for (let i = 0; i < ring.length; i++) {
            if(ring[i] === c) {
                let steps = 0;
                
                if (i <= ring.length / 2) {
                    steps = i + 1;
                }
                else {
                    steps = ring.length - i + 1;
                }

                const newRing = ring.substring(i, ring.length) + ring.substring(0, i);

                result.push({newRing, steps});
            }
        }

        memRotations.set(toRotationKey(ring, c), result);

        return result;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



