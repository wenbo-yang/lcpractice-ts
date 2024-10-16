import {MinHeap} from './commonLibs';

xdescribe('leetcode 692: top k most frequent words', () => {
    function topKFrequent(words: string[], k: number): string[] {
        const compare = (a: {freq: number, word: string}, b: {freq: number, word: string}) => {
            if (a.freq > b.freq) {
                return 1;
            }

            if (a.freq < b.freq) {
                return -1;
            }

            return a.word > b.word ? 1 : -1
        }

        const frequencyMap = new Map<string, number>();

        for (const w of words) {
            frequencyMap.set(w, (frequencyMap.get(w) || 0) + 1);
        }

        const array = Array.from(frequencyMap).map(m => { return {freq: m[1], word: m[0]}; });

        const minHeap = new MinHeap<{freq: number, word: string}>(compare);
        
        for (const it of array) {
            if (minHeap.length < k) {
                minHeap.push(it);
            }

            if (minHeap.length === k && it.freq >= minHeap.peek().freq && it.word < minHeap.peek().word) {
                minHeap.pop();
                minHeap.push(it);
            }
        }

        return minHeap.toArray().map(it => it.word);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
