xdescribe('leetcode 820: short encoding', () => {
    class TrieNode {
        isEnd: boolean = false;
        children: TrieNode[] = new Array<TrieNode>(26);
    }

    class TrieTree {
        root: TrieNode = new TrieNode;

        insert(words: string[]) {
            let temp = this.root;

            for (const word of words) {
                let current: TrieNode = this.root;
                // Iterate over the word in reverse order.
                for (let i = word.length - 1; i >= 0; --i) {
                  const index: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
                  // Create a new node if necessary.
                  if (!current.children[index]) {
                    current.children[index] = new TrieNode();
                  }
                  // Move to the child node.
                  current = current.children[index]!;
                }

                current.isEnd = true;
              }
        }
    }

    function minimumLengthEncoding(words: string[]): number {
        const trieTree = new TrieTree();
        // Insert all words into the Trie.
        trieTree.insert(words)
        // Initial length is 1 for the '#' at the end of each word.
        return depthFirstSearch(trieTree.root, 1);
    };

    function depthFirstSearch(currentNode: TrieNode, depth: number): number {
        let isLeaf: boolean = true;
        let totalLength: number = 0;
      
        
        for (let i: number = 0; i < 26; ++i) {
          if (currentNode.children[i]) {
            isLeaf = false; 
            totalLength += depthFirstSearch(currentNode.children[i]!, depth + 1);
          }
        }
      
        if (isLeaf) {
          totalLength += depth;
        }
      
        return totalLength;
      }
      

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
