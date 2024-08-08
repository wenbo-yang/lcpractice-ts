describe('leetcode 406: reconstruct queue', () => {
    function reconstructQueue(people: number[][]): number[][] {
        const compare = function (a: number[], b: number[]){
            if (a[1] > b[1]) {
                return 1;
            }
            else if (a[1] < b[1]) {
                return -1;
            }

            if (a[0] > b[0]) {
                return 1
            }
            else if (a[0] < b[0]) {
                return -1
            }

            return 0;
        }

        people.sort(compare);
        let index = 0;

        while (index < people.length) {
            index = placeAtValidPosition(people, index);
            index++;
        }

        return people;
    };

    function placeAtValidPosition(people: number[][], index: number): number {
        let numberOfGreaterEqual = people[index][1];
        let i = 0;
        let validIndex = 0;
        for(i = 0; i < index; i++) {
            if (numberOfGreaterEqual === 0) {
                validIndex = i;
                break;
            }

            if (people[i][0] >= people[index][0]) {
                numberOfGreaterEqual--;
            }
        }

        if (validIndex !== index) {
            // from valid index shift one position downwards 
            const temp = people[index];
            for (let i = validIndex; i < index; i++) {
                people[i + 1] = people[i];
            }

            people[validIndex] = temp;
        } 
    
        return validIndex;
    }

    it('test case 1 Input: people, output queue ', () => {
        const people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]];
        const output = [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]];

        expect(reconstructQueue(people)).toEqual(output);
    });
});




