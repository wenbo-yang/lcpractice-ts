xdescribe('leetcode 679: 24 game', () => {
    function judgePoint24(cards: number[]): boolean {
        // pair combinations

        if (judgePairs(cards)) {
            return true;
        }
        
        
        return judge3s(cards)
    };

    function judgePairs(cards: number[]) {
        let pair1 = getAllResultsFromPair(cards[0], cards[1]);
        let pair2 = getAllResultsFromPair(cards[2], cards[3]);

        if (has24(pair1, pair2)){
            return true;
        }


        pair1 = getAllResultsFromPair(cards[0], cards[2]);
        pair2 = getAllResultsFromPair(cards[1], cards[3]);

        if (has24(pair1, pair2)){
            return true;
        }
        
        pair1 = getAllResultsFromPair(cards[0], cards[3]);
        pair2 = getAllResultsFromPair(cards[1], cards[2]);


        if (has24(pair1, pair2)){
            return true;
        }

        return false;
    }

    function has24(pair1: number[], pair2: number[]): boolean {
        for (const p1 of pair1) {
            for (const p2 of pair2) {
                if (getAllResultsFromPair(p1, p2).includes(24)) {
                    return true;
                }

            }
        }

        return false;
    }
    


    function getAllResultsFromPair(a: number, b: number): number[] {
        const result = new Set<number>();

        result.add(a + b);
        result.add(a - b);
        result.add(a * b);
        result.add(a / b);
        result.add(b - a);
        result.add(b / a);
        result.add(b * a);

        return Array.from(result);
    }

    function judge3s(cards: number[]): boolean {
        
        return judge3shelperdddd(cards[0], cards[1], cards[2], cards[3]) || 
               judge3shelperdddd(cards[0], cards[2], cards[1], cards[3]) || 
               judge3shelperdddd(cards[0], cards[3], cards[1], cards[2]) || 
               judge3shelperdddd(cards[1], cards[2], cards[0], cards[3]) || 
               judge3shelperdddd(cards[1], cards[3], cards[0], cards[2]) || 
               judge3shelperdddd(cards[2], cards[3], cards[0], cards[1])
    }

    function judge3shelperdddd(a: number, b: number, c: number, d: number) {
        let pair1 = getAllResultsFromPair(a, b);
        
        for (const p1 of pair1) {
            let pair2 = getAllResultsFromPair(c, p1);
            for (const p2 of pair2) {
                if (getAllResultsFromPair(d, p2).includes(24)) {
                    return true;
                }
            }
        }

        for (const p1 of pair1) {
            let pair2 = getAllResultsFromPair(d, p1);
            for (const p2 of pair2) {
                if (getAllResultsFromPair(c, p2).includes(24)) {
                    return true;
                }
            }
        }

        return false;
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});







