xdescribe('leetcode 649: predict party victory', () => {
    function predictPartyVictory(senate: string): string {
        const qR: number[] = [];
        const qD: number[] = [];

        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === 'R') {
                qR.push(i);
            }
            else {
                qD.push(i);
            }
        }
        
        while (qR.length && qD.length) {
            if (qR[0] > qD[0]) {
                qR.push(qR[0]);
            }
            else {
                qD.push(qD[0]);
            }

            qR.shift(); qD.shift();
        }

        return qR.length > qD.length ? 'Radiant' : 'Dire';
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
