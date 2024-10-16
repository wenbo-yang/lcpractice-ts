xdescribe('leetcode 609: find duplicate file', () => {
    function findDuplicate(paths: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (const path of paths) {
            const split = path.split(' ');
            const dir = split[0]; 
            const {fileName, content} = getFileNameAndContent(split[1]);

            const dirAndFiles: string[] = map.get(content) || [];
            dirAndFiles.push(dir + '/' +fileName);
            
            map.set(content, dirAndFiles);
        }
        
        const result: string[][] = [];

        for (const key of map.keys()) {
            if ((map.get(key) || []).length > 1) {
                result.push(map.get(key) || []);
            }
        } 

        return result;
    };

    function getFileNameAndContent(fileNameAndContent: string): { fileName: string; content: string; } {
        const stack: number[] = [];
        let index = fileNameAndContent.length - 1 ;
        do {
            if (fileNameAndContent[index] === ')') {
                stack.push(index);
            }

            if (fileNameAndContent[index] === '(') {
                stack.pop();
            }

            index--;
        }
        while (stack.length);
        
        const fileName = fileNameAndContent.substring(0, index + 1);
        const content = fileNameAndContent.substring(index + 1);

        return {fileName, content};
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


