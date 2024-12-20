xdescribe('leetcode 1024: video stitching', () => {
    function videoStitching(clips: number[][], time: number): number {
        const lastSeen: number[] = Array(time).fill(0);

        for (let clip of clips) {
            let [start, end] = clip;
            if (start < time) {
                lastSeen[start] = Math.max(lastSeen[start], end);
            }
        }
    
        let maxReach = 0;
        let answer = 0;
        let previousReach = 0;
    
        for (let i = 0; i < time; i++) {
            maxReach = Math.max(maxReach, lastSeen[i]);
    
            if (maxReach <= i) {
                return -1;
            }
    
            if (previousReach == i) {
                answer++;
                previousReach = maxReach;
            }
        }
    
        return answer;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
