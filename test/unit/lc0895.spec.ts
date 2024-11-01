
xdescribe('leetcode 895: maximum frequency stack', () => {
    class FreqStack {
        private numberFrequencyMap = new Map<number, number>();
        private frequencyNumberMap = new Map<number, Set<number>>();
        private mostFrequentElement: number = Number.NaN;


        constructor() {
        }
    
        push(val: number): void {
            const frequency = (this.numberFrequencyMap.get(val) || 0) + 1;

            this.numberFrequencyMap.set(val, frequency);
            if ((this.numberFrequencyMap.get(val) || 0) > (this.numberFrequencyMap.get(this.mostFrequentElement) || 0)) {
                this.mostFrequentElement = val;
            }

            let set = this.frequencyNumberMap.get(frequency) || new Set<number>();
            set.add(val);
            this.frequencyNumberMap.set(frequency, set);

            set = this.frequencyNumberMap.get(frequency - 1) || new Set<number>();
            set.delete(val);
            if (set.size === 0) {
                this.frequencyNumberMap.delete(frequency - 1);
            }
        }
    
        pop(): number {
            const freq = this.numberFrequencyMap.get(this.mostFrequentElement) || 0;

            if (freq === 0) {
                return Number.NaN;
            }

            // remove this value from current frequencyNumber map 
            let set = this.frequencyNumberMap.get(freq) || new Set<number>();
            set.delete(this.mostFrequentElement);
            this.frequencyNumberMap.set(freq, set);
            if (set.size === 0) {
                this.frequencyNumberMap.delete(freq);
            }

            // add this to the frequencyNumber freq - 1 //
            set = this.frequencyNumberMap.get(freq - 1) || new Set<number>();
            set.add(this.mostFrequentElement);
            this.frequencyNumberMap.set(freq - 1, set);

            // update mostFrequentElement
            const temp = this.mostFrequentElement;
            this.mostFrequentElement = set.values().next().value as number; 

            return temp;
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
