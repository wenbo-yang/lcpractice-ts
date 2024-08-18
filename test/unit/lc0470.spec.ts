import { randomInt } from "crypto";

xdescribe('leetcode 470: implement rand10 with rand7', () => {
    function rand7(): number {
        return randomInt(1, 7);
    }

    function rand10(): number {
        let rand = 0;
        for (let i = 0; i < 10; i++) {
            rand += rand7()%7;
        } 
    
        return 1 + rand % 10;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
