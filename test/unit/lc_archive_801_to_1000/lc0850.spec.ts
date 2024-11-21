xdescribe('leetcode 850: rectangle area 2', () => {
    interface Node {
        left: number;
        right: number;
        count: number;
        length: number;
      };
      

      function pushUp(index: number, treeNodes: Node[], sortedUniqueYCoordinates: number[]): void {
        if (treeNodes[index].count > 0) {
          treeNodes[index].length = sortedUniqueYCoordinates[treeNodes[index].right + 1] - sortedUniqueYCoordinates[treeNodes[index].left];
        } else if (treeNodes[index].left === treeNodes[index].right) {
          treeNodes[index].length = 0;
        } else {
          treeNodes[index].length = treeNodes[2 * index].length + treeNodes[2 * index + 1].length;
        }
      }
      
      function build(index: number, left: number, right: number, treeNodes: Node[]): void {
        treeNodes[index] = { left, right, count: 0, length: 0 }; // Initialize the node
        if (left !== right) {
          const mid: number = Math.floor((left + right) / 2);
          build(2 * index, left, mid, treeNodes);
          build(2 * index + 1, mid + 1, right, treeNodes);
        }
      }
      
      function modify(index: number, left: number, right: number, deltaCount: number, treeNodes: Node[], sortedUniqueYCoordinates: number[]): void {
        if (treeNodes[index].left >= left && treeNodes[index].right <= right) {
          treeNodes[index].count += deltaCount;
        } else {
          const mid: number = Math.floor((treeNodes[index].left + treeNodes[index].right) / 2);
          if (left <= mid) modify(2 * index, left, right, deltaCount, treeNodes, sortedUniqueYCoordinates);
          if (right > mid) modify(2 * index + 1, left, right, deltaCount, treeNodes, sortedUniqueYCoordinates);
        }
        pushUp(index, treeNodes, sortedUniqueYCoordinates);
      }
      
      function query(treeNodes: Node[]): number {
        return treeNodes[1].length;
      }
      
      function rectangleArea(rectangles: number[][]): number {
        const MOD = 1000000007;
        const n: number = rectangles.length;
        const segments: number[][] = new Array(n * 2);
        const yAxisValues: Set<number> = new Set();
        let index: number = 0;
      
        rectangles.forEach(rectangle => {
          const [x1, y1, x2, y2] = rectangle;
          segments[index++] = [x1, y1, y2, 1];
          segments[index++] = [x2, y1, y2, -1];
          yAxisValues.add(y1);
          yAxisValues.add(y2);
        });
      
        segments.sort((a, b) => a[0] - b[0]);
      
        const yAxisToIndex: Map<number, number> = new Map();
        index = 0;
        yAxisValues.forEach(yValue => yAxisToIndex.set(yValue, index++));
      
        const treeNodes: Node[] = [];
        const sortedUniqueYCoordinates = Array.from(yAxisValues).sort((a, b) => a - b);
      
        build(1, 0, sortedUniqueYCoordinates.length - 1, treeNodes); 
      
        let answer: number = 0;
        segments.forEach((segment, i) => {
          const [x, y1, y2, k] = segment;
          if (i > 0) {
            const width = x - segments[i - 1][0];
            answer += query(treeNodes) * width;
            answer %= MOD; 
          }
          modify(1, yAxisToIndex.get(y1)!, yAxisToIndex.get(y2)! - 1, k, treeNodes, sortedUniqueYCoordinates);
        });
      
        return answer;
      }
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
