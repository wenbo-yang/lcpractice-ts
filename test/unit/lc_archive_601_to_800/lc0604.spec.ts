xdescribe('leetcode 604: design compressed string iterator', () => {
    class StringIterator {
        private index: number = 0;
        private charIteration: number = 0;
        private charLength = -1;
        private s: string = ''
        
        constructor(s: string) {
            this.s = s;
        }

        hasNext(): boolean {
            return this.index < this.s.length;
        }

        next(): string {
            if (!this.hasNext()) {
                return '';
            }

            if (this.charLength === -1) {
                this.charLength = this.getCharLength();
            }

            const candidate = this.s[this.index];
            
            if (++this.charIteration === this.charLength) {
                this.index += this.charLength;
                this.charLength = -1;
            }

            return candidate;
        }

        private getCharLength(): number {
            const number: string[] = [];
            let numberIndex = this.index + 1;
            while (Number(this.s[numberIndex])) {
                number.push(this.s[numberIndex++]);
            }

            return Number(number.join(''));
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
