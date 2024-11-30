xdescribe('leetcode 1044: longest duplicate substring', () => {
    function longestDupSubstring(s: string): string {
        const power: bigint[] = [];
        const hash: bigint[] = [];
        
        const n = s.length;

        computePowers(n, power);
        computeHashes(s, hash);

        let left = 0, right = n;
        let result = "";

        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            const candidate = check(s, mid, power, hash);
        
            if (candidate) {
                left = mid;
                result = candidate;
            } else {
                right = mid - 1;
            }
        }
    
        return result;
    };

    function computePowers(length: number, power: bigint[]): void {
        const base = 131;
        power[0] = BigInt(1);
        for (let i = 0; i < length; ++i) {
            power[i + 1] = power[i] * BigInt(base);
        }
    }

    function computeHashes(s: string, hash: bigint[]): void {
        const base = 131;
        const n = s.length;
        hash[0] = BigInt(0);
        for (let i = 0; i < n; ++i) {
            hash[i + 1] = hash[i] * BigInt(base) + BigInt(s.charCodeAt(i));
        }
    }

    function check(s: string, len: number, power: bigint[], hash: bigint[]): string | null {
        const n = s.length;
        const visited = new Set<bigint>();
    
        for (let i = 1; i + len - 1 <= n; ++i) {
            const j = i + len - 1;
            const currentHash = hash[j] - hash[i - 1] * power[len];
          
            if (visited.has(currentHash)) {
                return s.substring(i - 1, i - 1 + len);
            }
          
            visited.add(currentHash);
        }
      
        return null;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
