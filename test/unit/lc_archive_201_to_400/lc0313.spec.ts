import { MinHeap } from '../commonLibs';

xdescribe('leetcode 313: super ugly number', () => {
    // try heap
    // max queue and min queue

    function nthSuperUglyNumber(n: number, primes: number[]): number {
        primes.sort((a, b) => a - b);

        const uglyNumbers: number[] = [1];

        if (n === 1) {
            return 1;
        }

        while (uglyNumbers.length < n) {
            const nextUglyNumber = getNext(uglyNumbers, primes);
            uglyNumbers.push(nextUglyNumber);
        }

        return uglyNumbers[uglyNumbers.length - 1];
    }

    function getNext(uglyNumbers: number[], primes: number[]) {
        const minHeap = new MinHeap();
        let currentMin = Number.MAX_SAFE_INTEGER;
        for (const prime of primes) {
            const target = uglyNumbers[uglyNumbers.length - 1] / prime;
            const candidate = binarySearchForNextGreater(uglyNumbers, target, 0, uglyNumbers.length) * prime;

            if (candidate < currentMin) {
                currentMin = candidate;
            }
        }

        return currentMin;
    }

    function binarySearchForNextGreater(uglyNumbers: number[], target: number, arg2: number, length: number): number {
        throw new Error('Function not implemented.');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
