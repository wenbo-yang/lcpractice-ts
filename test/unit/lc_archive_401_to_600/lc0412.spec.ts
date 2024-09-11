xdescribe('leetcode 412: fizzbuzz', () => {
    function fizzBuzz(n: number): string[] {
        const result: string[] = [];

        for (let i = 0; i < n; i++) {
            const number = i + 1;

            if (number % 5 === 0 && number % 3 === 0) {
                result.push('FizzBuzz');
            } else if (number % 5 === 0) {
                result.push('Buzz');
            } else if (number % 3 === 0) {
                result.push('Fizz');
            } else {
                result.push(number.toString());
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
