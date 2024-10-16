xdescribe('leetcode 722: remove comments', () => {
    function removeComments(source: string[]): string[] {
        const toRemove: number[][] = [];
        
        const joinedString = source.join('\n');

        let index = 0;
        let l = 0;
        let r = 0;
        while(index < joinedString.length) {
            if (joinedString[index] === '/' ) {
                l = index
                if (joinedString[index + 1] === '/') {
                    r = getEndLineChar(joinedString, index);
                    toRemove.push([l, r]);
                }
                if (joinedString[index + 1] === '*') {
                    r = getClosingComment(joinedString, index);
                    toRemove.push([l, r]);
                }
            }
        }

        toRemove.reverse();

        const array: string[] = [];

        index = 0;
        while (index < joinedString.length) {
            if (toRemove.length > 0) {
                if (index === toRemove[toRemove.length - 1][0]) {
                    index = toRemove[toRemove.length -1][1];
                    toRemove.pop();
                }
                else {
                    array.push(joinedString[index]);
                }
            }
            else {
                array.push(joinedString[index]);
            }
            

            index++;
        }

        return array.join().split('\n');

    };

    function getClosingComment(joinedString: string, index: number): number {
        while(!(joinedString[index] === '/' && joinedString[index - 1] === '*')) {
            index++;
        }

        return index;
    }

    function getEndLineChar(joinedString: string, index: number): number {
        while (joinedString[index] !== '\n') {
            index++;
        }
        return index - 1;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




