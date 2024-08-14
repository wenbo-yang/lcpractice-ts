xdescribe('leetcode 406: reconstruct queue', () => {
    function reconstructQueue(people: number[][]): number[][] {
        const compare = function (a: number[], b: number[]) {
            if (a[1] > b[1]) {
                return 1;
            } else if (a[1] < b[1]) {
                return -1;
            }

            if (a[0] > b[0]) {
                return 1;
            } else if (a[0] < b[0]) {
                return -1;
            }

            return 0;
        };

        people.sort(compare);

        let index = 0;
        while (index < people.length) {
            const count = isAtValidPosition(people, index);
            if (count !== people[index][1]) {
                index = placeAtValidPosition(people, index, count);
            }

            index++;
        }

        console.log(people);

        return people;
    }

    function isAtValidPosition(people: number[][], index: number): number {
        let numberOfGreaterOrEqual = people[index][1];

        if (numberOfGreaterOrEqual === 0) {
            return 0;
        }

        let count = 0;

        for (let i = 0; i < index; i++) {
            if (people[i][0] >= people[index][0]) {
                count++;
            }
        }

        return count;
    }

    function placeAtValidPosition(people: number[][], index: number, greaterOrEqualsCount: number): number {
        let placeAt = 0;
        for (let i = index - 1; i >= 0; i--) {
            if (people[i][0] >= people[index][0]) {
                greaterOrEqualsCount--;
            }

            if (greaterOrEqualsCount === people[index][1]) {
                placeAt = i;
                break;
            }
        }

        shiftRight(people, placeAt, index, Array.from(people[index]));

        return placeAt;
    }

    function shiftRight(people: number[][], start: number, end: number, tempValue: number[]) {
        const tempArray = people.slice(start, end);
        let index = 0;
        for (let i = start + 1; i <= end; i++) {
            people[i] = tempArray[index++];
        }

        people[start] = tempValue;
    }

    it('test case 1 Input: people, output queue ', async () => {
        const people = [
            [7, 0],
            [4, 4],
            [7, 1],
            [5, 0],
            [6, 1],
            [5, 2],
        ];
        const output = [
            [5, 0],
            [7, 0],
            [5, 2],
            [6, 1],
            [4, 4],
            [7, 1],
        ];

        expect(reconstructQueue(people)).toEqual(output);
    }, 1000);
});
