xdescribe('leetcode 1239: maximum length of a concatenated string with unique characters', () => {
    const popCount = (n: number): number => {
        let count = 0;
        while (n) {
          count += n & 1;
          n >>= 1;
        }
        return count;
      };
      
      const maxLength = (arr: string[]): number => {
        let maxLength = 0; // To store the max length of unique characters
        let masks: number[] = [0];
      
        arr.forEach(str => {
          let mask = 0; // Bitmask to represent the current string
      
          for (const ch of str) {
            let bitIndex = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      
            if ((mask >> bitIndex) & 1) {
              mask = 0;
              break;
            }
      
            mask |= 1 << bitIndex;
          }
      
          if (mask === 0) return;
      
          const currentMasks = [...masks];
        
          currentMasks.forEach(combinedMask => {
            if ((combinedMask & mask) === 0) {
              masks.push(combinedMask | mask);
              maxLength = Math.max(maxLength, popCount(combinedMask | mask))!;
            }
          });
        });
      
        return maxLength;
      };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
