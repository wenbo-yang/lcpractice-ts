import { Trie } from '../commonLibs';

xdescribe('leetcode 208: prefix tree', () => {
    it('test case 1 Input:, target = 5, output 2 ', () => {
        const trie = new Trie();
        trie.insert('apple');

        expect(trie.search('apple')).toBeTruthy();
        expect(trie.search('app')).toBeFalsy();
        expect(trie.startsWith('app')).toBeTruthy();
        trie.insert('app');
        expect(trie.search('app')).toBeTruthy();
    });
});
