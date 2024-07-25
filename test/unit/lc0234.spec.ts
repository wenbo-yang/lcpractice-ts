import { ListNode } from './commonLibs';

xdescribe('leetcode 234: description', () => {
    function isPalindrome(head: ListNode | null): boolean {
        if (!head || !head.next) {
            return true;
        }

        const stack: (ListNode | null)[] = [];

        let temp: ListNode | null = head;
        while (temp) {
            stack.push(temp);
            temp = temp.next;
        }

        let left = 0;
        let right = stack.length - 1;

        while (left < right) {
            if (stack[left]?.val !== stack[right]?.val) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
