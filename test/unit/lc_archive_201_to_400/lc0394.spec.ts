xdescribe('leetcode 394: decode string', () => {
    function decodeString(s: string): string {
        const stack: string[] = [];
        const result: string[] = [];
        let index: number = 0;
        while (index < s.length) {
            if (stack.length === 0 && !Number(s[index])) {
                result.push(s[index++]);
                continue;
            }

            if (Number(s[index])) {
                let number: string[] = [];
                while (Number(s[index])) {
                    number.push(s[index++]);
                }

                stack.push(number.join('')); // string number
                continue;
            }

            if (s[index] === '[') {
                stack.push(s[index++]);
                continue;
            }

            if (s[index++] === ']') {
                result.push(...generateArrayFromStack(stack));
                continue;
            }

            if (stack.length > 0) {
                stack.push(s[index++]);
                continue;
            }
        }

        return result.join('');
    }

    function generateArrayFromStack(stack: string[]): string[] {
        const array: string[] = [];
        while (stack[stack.length - 1] !== '[') {
            array.push((stack.pop() || '').toString());
        }

        stack.pop(); // this is [
        let numberOfTimes = Number(stack.pop()) || 0; // this is the number

        array.reverse();

        const result = new Array<string>(array.length * numberOfTimes);

        for (let i = 0; i < result.length; i++) {
            result[i] = array[i % array.length];
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
