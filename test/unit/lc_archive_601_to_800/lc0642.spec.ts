xdescribe('leetcode 642: design autocomplete', () => {

    class TrieNode {
        end: boolean = false;;
        rank: number = 0;
        children: TrieNode[] = [];
    }
    
    class AutoComplete {
        private rankMap = new Map<string, number>();
        private root: TrieNode = new TrieNode();
        private aggregatedSearch: string = '';
        constructor(dict:string[], freq: number[]) {
            this.parseDict(dict, freq);
        }

        parseDict(dict: string[], freq: number[]) {
            let index = 0;
            for (const w of dict) {
                this.insert(w, freq[index++]);
            }
        }

        insert(w: string, rank: number) {
            let node = this.root;
            for (const c of w) {
                if (node.children.length === 0) {
                    node.children = new Array<TrieNode>(27).fill(new TrieNode());
                }
                if (c === ' ') {
                    node = node.children[0];
                }
                else {
                    node = node.children[c.charCodeAt(0) - 'a'.charCodeAt(0) + 1];
                }
            }
            node.end = true;
            node.rank = rank;
        }

        parseRankMap(dict: string[], freq: number[]) {
            let index = 0;
            this.rankMap = new Map(dict.map(w => [w, freq[index++]]));
        }

        input(input: string): string[] {   
            this.aggregatedSearch = input === '#' ? this.aggregatedSearch : this.aggregatedSearch + input;
            const searchResults = this.find(this.aggregatedSearch);            
            
            if (input === '#') {    
                this.insert(this.aggregatedSearch, (searchResults[0]?.rank || 0) + 1);
                this.aggregatedSearch = ''
            }            

            return this.getLastThree(searchResults);
        }


        getLastThree(searchResults: { w: string; rank: number; }[]): string[] {
            searchResults.sort((a, b) => b.rank - a.rank);
            
            return [searchResults[0].w, searchResults[1].w, searchResults[2].w].filter(w => w !== undefined).sort();
        }

        find(aggregatedSearch: string): { w: string, rank: number}[] {
            let node = this.root;
            for (const c of aggregatedSearch) {
                if (node.children.length === 0) {
                    break;
                }
                if (c === ' ') {
                    node = node.children[0];                
                }
                
                node = node.children[c.charCodeAt(0) - 'a'.charCodeAt(0) + 1];                
            }
            // move to the current prefix

            const results: {w: string, rank: number}[] = [];
            
            this.getAllResultsInSubtree(node, aggregatedSearch, results);

            return results;
        }

        getAllResultsInSubtree(node: TrieNode, currentPrefix: string, results: { w: string; rank: number; }[]) {
            if (!node) {
                return;
            }

            if (node.end) {
                results.push({w: currentPrefix, rank: node.rank});
            }

            for (let i = 0; i < node.children.length; i++) {
                this.getAllResultsInSubtree(node.children[i], currentPrefix + (i === 0 ? ' ' : String.fromCharCode('a'.charCodeAt(0) + i - 1)), results); 
            }
        }

    }



    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
