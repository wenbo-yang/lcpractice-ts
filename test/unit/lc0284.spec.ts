xdescribe('leetcode num: description', () => {
    class Iterator {
        hasNext(): boolean {
            throw new Error('not implemented');
        }
        next(): number {
            throw new Error('not implemented');
        }
    }

    class PeekingIterator {
        private iterator: Iterator;
        private hasPeeked: boolean = false; // Flag to check if we already peeked at the next element
        private peekedValue: number = 0;
        constructor(iterator: Iterator) {
            this.iterator = iterator;
        }

        peek(): number {
            if (!this.hasPeeked) {
                // If we haven't already peeked, fetch the next element and set the hasPeeked flag
                const result = this.iterator.next();
                if (!result) {
                    this.peekedValue = result;
                    this.hasPeeked = true; // Set the peek flag
                }
            }
            return this.peekedValue; // Return the peeked value
        }

        next(): number {
            if (!this.hasPeeked) {
                // If we haven't peeked, extract the next element from the iterator directly and return it
                const result = this.iterator.next();
                if (!result) {
                    return result;
                }
            } else {
                // If there is a peeked value, reset the hasPeeked flag since next() consumes the peeked element
                this.hasPeeked = false;
                return this.peekedValue; // Return the peeked value which is the next element
            }

            return NaN;
        }

        hasNext(): boolean {
            return this.hasPeeked || !this.iterator.next();
        }
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
