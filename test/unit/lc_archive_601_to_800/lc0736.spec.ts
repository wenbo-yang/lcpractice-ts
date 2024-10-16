import {Queue} from './commonLibs';

xdescribe('leetcode 736: parse lisp expression', () => {
    function evaluate( expression: string): number {        
        const queue = new Queue<Map<string, number>>();

        return evalulateHelper(expression, 0, queue);
    }

    function evalulateHelper(s: string, pos: number, queue: Queue<Map<string, number>>): number {
        queue.enque(new Map<string, number>());

        let value: number = 0;

        if (s[pos] === '(') pos++;

        const token = getToken(s, pos);

        if (token == "add") {
            let v1 = evalulateHelper(s, ++pos, queue);
            let v2 = evalulateHelper(s, ++pos, queue);
            value = v1 + v2;
        } else if (token == "mult") {
            let v1 = evalulateHelper(s, ++pos, queue);
            let v2 = evalulateHelper(s, ++pos, queue);
            value = v1 * v2;
        } else if (token === "let") {
            let varS = '';
            // expecting " var1 exp1 var2 exp2 ... last_expr)"
            while (s[pos] !== ')') {
                ++pos;
                // Must be last_expr
                if (s[pos] === '(') {
                    value = evalulateHelper(s, ++pos, queue);
                    break;
                }                
                // Get a token, could be "x" or "-12" for last_expr
                varS = getToken(s, pos);                
                // End of let, var is last_expr
                if (s[pos] == ')') {
                    if (!Number(varS)) {
                        value = getValue(varS, queue);
                    }
                    else {
                        value = Number(varS);
                    }
                    break;
                }
                // x -12 -> set x to -12 and store in the current scope and take it as the current return value
                const temp = evalulateHelper(s, ++pos, queue);
                (queue.peek() || new Map<string, number>()).set(varS, temp);
                value = temp;
            }
        } 
        else if (!Number(token)) {            
            value = getValue(token, queue); // symbol
        } 
        else {            
            value = Number(token); // number
        }
        if (s[pos] == ')') ++pos;        
        queue.deque();        
        return value;
    }

    function getToken(s: string, pos: number): string {
        let token = '';
        while (pos < s.length) {            
            if (s[pos] === ')' || s[pos] === ' ') break;
            token += s[pos++];
        }
        return token;
    }

    function getValue(token: string, queue: Queue<Map<string, number>> ): number {
        const arr = queue.toArray();

        for (const map of arr) {
            if (map.has(token)) {
                return map.get(token) || 0;
            }
        }

        return 0;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






