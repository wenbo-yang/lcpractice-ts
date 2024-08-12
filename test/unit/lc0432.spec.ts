import { DoubleLinkedListNode } from "./commonLibs";

xdescribe('leetcode 432: description', () => {
    class AllOne {
        private valueCountMap = new Map<string, number>();
        private countValueMap = new Map<number, Set<string>>();
        private maxKey = Number.MIN_SAFE_INTEGER;
        private minKey = Number.MAX_SAFE_INTEGER;

        constructor() {
        }
    
        inc(key: string): void {
            const currCount = this.valueCountMap.get(key) || 0;
            // add to incremented count
            const incCountSet = this.countValueMap.get(currCount + 1) || new Set<string>();
            incCountSet.add(key);
            this.countValueMap.set(currCount + 1, incCountSet);

            // remove from existing count map
            const currCountSet = this.countValueMap.get(currCount);
            if (currCountSet) {
                currCountSet.delete(key);
                if (currCountSet.size === 0) {
                    this.countValueMap.delete(currCount);
                    if (this.minKey === currCount) {
                        this.minKey++;
                    }
                }
            }

            this.valueCountMap.set(key, currCount + 1);
            this.determineMaxMin(currCount + 1);
        }
    
        dec(key: string): void {
            const currCount = this.valueCountMap.get(key) || 0;
            if (currCount) {
                const currCountSet = this.countValueMap.get(currCount);
                // if there is only one remove from valuecount map and countValueMap
                if (currCountSet) {
                    currCountSet.delete(key);

                    if (currCountSet.size === 0) {
                        this.countValueMap.delete(currCount);

                        if (this.maxKey === currCount) {
                            this.maxKey--;
                        }
                    }
                }
                
                if (currCount - 1) {
                    const decCountSet = this.countValueMap.get(currCount - 1) || new Set();
                    decCountSet.add(key);
                    this.countValueMap.set(currCount - 1, decCountSet);
                }

                this.determineMaxMin(currCount - 1);
            }
        }
    
        getMaxKey(): string {
            return this.countValueMap.get(this.maxKey)?.keys().next().value ||  ""
        }
    
        getMinKey(): string {
            return this.countValueMap.get(this.minKey)?.keys().next().value ||  ""
        }

        private determineMaxMin(newCountInNode: number) {
            this.maxKey = Math.max(newCountInNode, this.maxKey);
            this.minKey = Math.min(newCountInNode, this.minKey);
        }
    }

    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});