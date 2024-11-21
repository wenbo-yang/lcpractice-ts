xdescribe('leetcode 906: super palindromes in range', () => {
    function superpalindromesInRange(left: string, right: string): number {
        const map = InitializePalidromeMap();

        let count = 0;
        let currentLevel: number = 1;
        while (currentLevel <= Math.ceil(Math.sqrt(right.length))) {
            if(!map.has(currentLevel)) {
                buildCurrentLevel(currentLevel, map);
            }

            const palindromes = map.get(currentLevel) || [];

            for (const s of palindromes) {
                if (!s.startsWith('0')) {
                    const product = makeProduct(s);
                    if (product > Number(right)) {
                        break;
                    }

                    if (isPalindrome(product) && product >= Number(left)) {
                        count++;
                    }
                }
            }

            currentLevel++;
        }

        return count;
    };

    function makeProduct(s: string): number{
        return (Number(s) * Number(s));
    }

    function isPalindrome(n: number): boolean {
        const nString = n.toString();
        let l = 0;
        let r = nString.length - 1;

        while (l < r) {
            if (nString[l] !== nString[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    } 

    function buildCurrentLevel(currentLevel: number, map: Map<number, string[]>) {
        const prev = map.get(currentLevel - 2) || [];
        const currParlindromeStrings: string[] = [];

        // 0, 1, 2 ,3, 4 
        // 000, 010, 020,
        // 101, 111, 121
        // 201 
        for (let i = 0; i < 10; i++) {
            for (const s of prev) {
                currParlindromeStrings.push(i.toString() + s + i.toString());
            }
        }
        
        map.set(currentLevel, currParlindromeStrings);
    }

    function InitializePalidromeMap(): Map<number, string[]> {
        const map = new Map<number, string[]>();
        const palindrome1: string[] = [];
        const palindrome2: string[] = [];
        for (let i = 0; i < 10; i++) {
            palindrome1.push(i.toString());
            palindrome2.push(i.toString() + i.toString());
        }
    
        map.set(0, palindrome1);
        map.set(1, palindrome2);
    
        return map;
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


