import { NTreeNode } from './commonLibs';

xdescribe('leetcode 428: description', () => {
    function deserialize(serialzableArray: any): NTreeNode | undefined {
        if (!serialzableArray) {
            return;
        }
        const root = dfs(serialzableArray);
        return root;
    }

    function dfs(serialzableArray: any): NTreeNode {
        if (typeof serialzableArray === 'number') {
            return new NTreeNode(Number(serialzableArray));
        }

        if (serialzableArray.length !== 2) {
            throw new Error('not formatted correctly');
        }

        const root = new NTreeNode(serialzableArray[0]);

        if (typeof serialzableArray === 'object') {
            for (const item of serialzableArray) {
                root.children.push(dfs(item));
            }
        } else {
            root.children.push(dfs(serialzableArray));
        }

        return root;
    }

    function serialize(root: NTreeNode): any {
        const result: any[] = [];
        const children: any[] = [];
        for (const child of root.children) {
            children.push(serialize(child));
        }
        result.push(children);
        return result;
    }

    function equals(serializable1: any, serializable2: any): boolean {
        if (typeof serializable1 !== typeof serializable2) {
            return false;
        }

        if (typeof serializable1 === 'number') {
            return serializable1 === serializable2;
        }

        const rootEqual = serializable1[0] === serializable2[0] && typeof serializable1[1] === 'number';

        if (typeof serializable1[1] !== typeof serializable2[1]) {
            return false;
        }

        if (typeof serializable1[1] === 'number') {
            return false;
        }

        if (serializable1[1].length !== serializable2[1].length) {
            return false;
        }

        let childrenEquals = true;

        for (let i = 0; i < serializable1.length; i++) {
            childrenEquals = childrenEquals && equals(serializable1[1][i], serializable2[1][i]);
        }

        return childrenEquals;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
