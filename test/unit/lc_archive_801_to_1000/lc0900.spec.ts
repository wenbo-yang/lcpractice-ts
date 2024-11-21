xdescribe('leetcode 900: RLE iterator', () => {
    class RLEIteratorAlt {
        private encoded: number[] = [];
        private pointer: number = 0;

        constructor(encoding: number[]) {
            this.encoded = encoding;
        }
    
        next(n: number): number {
            while (n > this.encoded[this.pointer] && this.pointer < this.encoded.length) {
                n = n - this.encoded[this.pointer];
                this.pointer += 2;
            }

            const retVal = this.encoded[this.pointer + 1];

            if (this.encoded[this.pointer]) {
                this.encoded[this.pointer] -= n;
            }

            return retVal || -1;
        }
    }
    
    class RLEIterator {
        private arr: number[][] = [];
        constructor(encoding: number[]) {
            this.parseEncodedArr(encoding);
        }
        
        next(n: number): number {
            while(n > this.lastCountOf(this.arr) && this.arr.length) {
                n = n - this.lastCountOf(this.arr);
                this.arr.pop();
            }

            const retVal = this.lastValueOf(this.arr);

            this.removeNItem(this.arr, n);

            return retVal || -1;
        }
        
        private removeNItem(arr: number[][], n: number) {
            this.arr[this.arr.length - 1][1] -= n;
        }

        private lastValueOf(arr: number[][]) {
            return this.arr[this.arr.length - 1][0];
        }

        private lastCountOf(arr: number[][]) {
            return this.arr[this.arr.length - 1][1];    
        }

        private parseEncodedArr(encoding: number[]) {
            let index = 0;
            encoding.forEach(it => {
                if(index % 2 === 0) { 
                    this.arr.push([0, it]);
                }
                else {
                    this.arr[this.arr.length -1 ][0] = it;
                }
                index++;
             });

             this.arr.reverse();
        }
    
    }


    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


