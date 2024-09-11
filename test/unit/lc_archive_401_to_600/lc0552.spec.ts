xdescribe('leetcode 552: student attendance ||', () => {
    interface Case {
        notEndingInL: number;
        endingL: number;
        endingLL: number;
    }

    function checkRecord(n: number): number {
        if ((n = 1)) {
            return 3;
        }

        if ((n = 2)) {
            return 8;
        }

        const df: { noAbsence: Case; withAbsence: Case }[] = [{ noAbsence: { notEndingInL: 2, endingL: 1, endingLL: 1 }, withAbsence: { notEndingInL: 3, endingL: 1, endingLL: 0 } }];

        for (let i = 3; i <= n; i++) {
            const prev = df[df.length - 1];
            const noAbsence = { notEndingInL: prev.noAbsence.notEndingInL + prev.noAbsence.endingL + prev.noAbsence.endingLL, endingL: prev.noAbsence.notEndingInL, endingLL: prev.noAbsence.endingL };
            const withAbsence = { notEndingInL: prev.noAbsence.notEndingInL + prev.noAbsence.endingL + prev.noAbsence.endingLL + prev.withAbsence.endingL + prev.withAbsence.endingLL, endingL: prev.withAbsence.notEndingInL, endingLL: prev.withAbsence.endingL };
            const curr = { noAbsence, withAbsence };
            df.push(curr);
        }

        const last = df[df.length - 1];
        return last.noAbsence.notEndingInL + last.noAbsence.endingL + last.noAbsence.endingLL + last.withAbsence.notEndingInL + last.withAbsence.endingL + last.withAbsence.endingLL;
    }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
