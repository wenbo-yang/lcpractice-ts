import {ListNode} from './commonLibs';


xdescribe('leetcode 725: listnode', () => {
    function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
        const result = new Array<ListNode | null>(k).fill(null);

        let temp = head;
        let size = 0;
        while (temp) {
            temp = temp.next;
            size++;
        }

        let index = 0;
        temp = head;
        
        const perSection = Math.ceil(size / k);
        let count = 0;
        while (temp) {
            if (count === 0) {
                result[index++] = temp;
            }
            else if (count === perSection) {
                count = 0;
            }
            temp = temp.next;
            count++;
        }

        return result;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
