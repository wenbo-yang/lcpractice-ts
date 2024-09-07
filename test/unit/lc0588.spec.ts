xdescribe('leetcode 588: in memory file system', () => {
    class TrieNode {
        name: string;
        isFile: boolean;
        content: string[];
        children = new Map<string, TrieNode>();
    
        insert(path: string, isFile: boolean): TrieNode {
            let node: TrieNode = this;
            const ps = path.split("/");
            for (let i = 1; i < ps.length; ++i) {
                let p = ps[i];
                node = node.children.get(p) || new TrieNode();
            }
            node.isFile = isFile;
            if (isFile) {
                node.name = ps[ps.length - 1];
            }
            return node;
        }
    
        search(path: string): TrieNode | null {
            let node: TrieNode = this;
            const ps = path.split("/");
            for (let i = 1; i < ps.length; ++i) {
                let p = ps[i];
                if (!node.children.has(p)) {
                    return null;
                }
                node = node.children.get(p) || new TrieNode();
            }
            return node;
        }
    }
    
    class FileSystem {
        private root: TrieNode = new TrieNode();
    
        public FileSystem() {
        }
    
        public ls(path: string): string[] {
            const ans: string[] = [];
            const node = this.root.search(path);
            if (node === null) {
                return ans;
            }
            if (node.isFile) {
                ans.push(node.name);
                return ans;
            }
            for (const v of node.children.keys()) {
                ans.push(v);
            }
            ans.sort();
            return ans;
        }
    
        public mkdir(path: string): void {
            this.root.insert(path, false);
        }
    
        public addContentToFile(filePath: string, content: content): void {
            const node = this.root.insert(filePath, true);
            node.content.push(content);
        }
    
        public readContentFromFile(filePath: string): string {
            const node = this.root.search(filePath);
            return node?.content.toString() || '';
        }
    }
    
    function func(): void {
        throw new Error('not implemented');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
