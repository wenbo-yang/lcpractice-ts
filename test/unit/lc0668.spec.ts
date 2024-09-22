xdescribe('leetcode 668: description', () => {
    function findKthNumber(m: number, n: number, k: number): number {
        //   1 2 3 4
        //     
        // 1 1(1) 2(2) 3(4)  4(7)
        // 2 2(3) 4(6) 6(9)  8(10)
        // 3 3(5) 6(8) 9(11) 12(12)



        // first diag has 1
        // second diag has 2
        // third diag has 3, 
        // or until the smallest of the two, 

        if (k === 0 || k > m * n) {
            return -1;
        }

        // lets have m rows and n columns where n >= m;
        if (n < m) {
            const temp = m;
            m = n;
            n = m;
        }
        
        const rowCol = translateKIntoRowCol(k, m, n);

        return (rowCol[0] + 1) * (rowCol[1] + 1);
    };

    function translateKIntoRowCol(k: number, m: number, n: number) {
        // diag corners 
        const diagCount = (m) * (m - 1) / 2
        
        // k = 3
        // m = 3
        let currentDiagSize = 1;
        let j = 0;
        let i = 0;
    
        if (k <= diagCount) {
            while (k > currentDiagSize) {
                k -= ++j;
                currentDiagSize++;
            }
        }
        else if ( k > m * n - diagCount ){
            k = k - (m * n - diagCount)
            let i = 1;
            let j = n - 1;
            currentDiagSize = m - 1;
            while (k > currentDiagSize) {
                k -= currentDiagSize;
                currentDiagSize--;
                i++;
            }
        }
            
        // kth item in the ith diag // k = 2 // second item in the i = 1 diagnol
        // first item is [0, 1] the second item is [i, 0];
        let count = [[i, j], [i, j]]
            
        while (k > 2) {
            const last = count[count.length - 1];
            const secondLast = count[count.length - 2];
            
            count.push([last[0] - 1, last[1]-1]);
            count.push([secondLast[0] + 1, secondLast[1] + 1]);
        }

        return count[count.length - k];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



