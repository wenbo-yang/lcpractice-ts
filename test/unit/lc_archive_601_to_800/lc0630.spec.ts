import { MaxHeap } from "./commonLibs";

xdescribe('leetcode 630: course schedule', () => {
    function scheduleCourse(courses: number[][]): number {
        courses.sort((a,b) => a[1] - b[1]);

        const maxHeap = new MaxHeap<number>();
        let d = 0;

        for (const c of courses) {
            if (d + c[0] < c[1]) {
                d += c[0];
                maxHeap.push(c[0]);
            }
            else if (maxHeap.length && maxHeap.peek() > c[0]) {
                d += c[0] - maxHeap.peek();
                maxHeap.pop();
                maxHeap.push(c[0]);
            }
        }

        return maxHeap.length;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
