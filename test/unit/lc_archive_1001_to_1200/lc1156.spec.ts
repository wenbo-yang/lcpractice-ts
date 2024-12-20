xdescribe('leetcode 1156: swap for longest repeated char substring', () => {
    function maxRepOpt1(text: string): number {
        // longest window of array but 1 char
        // [a: x, b of 1]
        // if b becomes 2 then slide until b is one of a is 1
     
        const charCount = new Array<number>(26).fill(0);
        text.split('').forEach(n => charCount[n.charCodeAt(0) - 'a'.charCodeAt(0)]++);

        const windows: {size: number, larger: string}[] = []; 

        let l = 0;
        let r = 0;
        let larger = text[0];
        let largerCount = 1;
        let smaller = text.split('').find(x => x !== text[0]);
        let smallerCount = 0; 

        if (!smaller) {
            return text.length;
        }
        
        while(r < text.length) {
            if (l === r) {
                r++;
                continue;
            }

            if (text[r] === larger) {
                r++;
                continue;
            }

            if (text[r] === smaller) {
                smallerCount++;
                if (smallerCount === 2) {
                    if (largerCount === 1) {
                        smaller = larger;
                        larger = text[r];
                        largerCount = 2;
                        smallerCount = 1;
                    }
                    else {
                        windows.push({size: r - l, larger});
                        while (l < r && largerCount > 1 && smallerCount > 1) {
                            if (text[l] === larger) {
                                largerCount--;
                            }
                            if (text[l] === smaller) {
                                smallerCount--;
                            }
                        }
                    }
                }
                
                continue;
            }

            if (text[r] !== larger && text[r] !== smaller) {
                windows.push({size: r - l, larger});

                while (l < r && largerCount > 0 && smallerCount > 0) {
                    if (text[l] === larger) {
                        largerCount--;
                    }
                    if (text[l] === smaller) {
                        smallerCount--;
                    }
                }

                if (largerCount === 0) {
                    larger = smaller;
                    largerCount = smallerCount;
                    
                }
                smaller = text[r];
                smallerCount = 1;
            }

        }
        
        if (windows.length === 0 ) {
            return text.length - 1;
        }

        let max = Number.MIN_SAFE_INTEGER;
        for (const window of windows) {
            max = Math.max(charCount[window.larger.charCodeAt(0) - 'a'.charCodeAt(0)] > window.size ? window.size : window.size - 1, max);
        }

        return max;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
